import express from 'express';
import harvest from '../lib/harvest.js';
import rpNodeUtils from '@ucd-lib/rp-node-utils';

const {auth} = rpNodeUtils;
const router = express.Router();

async function authMiddleware(req, res, next) {
  // Grab the user provided token (Cookie or Authorization header)
  let token = auth.getTokenFromRequest(req);
  if( !token ) {
    return res.status(403).json({error: true, message: 'Forbidden'});
  }

  // Verify the header
  try {
    token = await auth.verifyToken(token, auth.getRequestIp(req));
  } catch(e) {
    return res.status(403).json({error: true, message: 'Forbidden'});
  }

  // only admins or users asking for self harvest, can harvest

  if( !auth.isAdmin(token) && 
    token.uid !== req.params.userId &&
    token.username !== req.params.userId+'@ucdavis.edu' ) {
    return res.status(403).json({error: true, message: 'Forbidden, invalid user'});
  }

  next();
}

router.get('/:userId', authMiddleware, async (req, res) => {
  res.json({state: (await harvest.state(req.params.userId)) || 'not-running'})
});

router.get('/:userId/clear', authMiddleware, async (req, res) => {
  res.json({success: await harvest.clear(req.params.userId)});
});

router.post('/:userId', authMiddleware, async (req, res) => {
  try {
    let result = await harvest.request(req.params.userId);
    res.json({
      harvestQueued : result,
      user : req.params.userId,
      message : result ? 'Your request has been queued' : 'A harvest is already in process'
    });
  } catch(e) {
    res.status(500).json({error: true, message: e.message});
  }
});

export default router;
