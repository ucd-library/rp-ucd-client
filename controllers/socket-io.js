import {Server} from 'socket.io';
import cookie from 'cookie';
import rpNodeUtils from '@ucd-lib/rp-node-utils';
import config from '../lib/config.js';
import eventBus from '../lib/event-bus.js';

const {auth, logger} = rpNodeUtils;
const userSockets = {};

eventBus.on('user-message', msg => {
  if( !userSockets[msg.user] ) return;

  userSockets[msg.user]
    .forEach(connection => connection.socket.emit('message', msg));
});

function getSocketCount() {
  let c = 0;
  for( let key in userSockets ) c += userSockets[key].length;
  return c;
}

export default server => {
  const io = new Server(server);
  io.on('connection', handleConnection);
};
 
/**
 * @function handleConnection
 * @description hand new socket.io connection
 * 
 * @param {Object} socket 
 * @returns {Promise}
 */
async function handleConnection(socket) {
  let cookies = cookie.parse(socket.handshake.headers.cookie);
  let token = cookies[config.jwt.cookieName];

  if( !token ) {
    // TODO: need to boot user here
    logger.error('User connected to websocket but no auth token provided');
    return;
  }

  // Verify the token
  try {
    token = await auth.verifyToken(token);
  } catch(e) {
    // TODO: need to boot user here
    logger.error('User connected to websocket but bad auth token provided');
    return;
  }

  // wire up disconnect listener
  socket.on('disconnect', () => {
    handleDisconnect(token, socket);
    logger.info("Socket disconnected, live sockets: "+getSocketCount());
  });

  // register socket
  let uid = token.username.replace(/@.*/, '');
  if( !userSockets[uid] ) {
    userSockets[uid] = [];
  }
  userSockets[uid].push({token, socket, uid});  

  logger.info("Socket connected, live sockets: "+getSocketCount());
}

/**
 * @function handleDisconnect
 * @description hand socket.io disconnection
 * 
 * @param {Object} token 
 * @param {Object} socket 
 * @returns
 */
function handleDisconnect(token, socket) {
  let uid = token.username.replace(/@.*/, '');
  if( !userSockets[uid] ) return;

  let index = userSockets[uid].find(item => item.socket === socket);
  userSockets[uid].splice(index, 1);

  if( userSockets[uid].length === 0 ) {
    delete userSockets[uid];
  }
}