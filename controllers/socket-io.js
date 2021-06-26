import {Server} from 'socket.io';
import cookie from 'cookie';
import rpNodeUtils from '@ucd-lib/rp-node-utils';
import config from '../lib/config.js';
import eventBus from '../lib/event-bus.js';

const {auth, logger} = rpNodeUtils;
const userSockets = {};

eventBus.on('user-message', msg => {
  console.log(userSockets, msg);
  if( !userSockets[msg.user] ) return;

  userSockets[msg.user]
    .forEach(connection => connection.socket.emit('message', msg));
});
console.log("UserSocket: ",userSockets);
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
  console.log("Attempting Connection");
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

  console.log("Connected");

  // wire up disconnect listener
  socket.on('disconnect', () => {
    handleDisconnect(token, socket);
  });

  // register socket
  let uid = token.username.replace(/@.*/, '');
  if( !userSockets[uid] ) {
    userSockets[uid] = [];
  }
  userSockets[uid].push({token, socket, uid});  
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
  if( !userSockets[token.username] ) return;
  let index = userSockets[token.username].find(item => item.socket === socket);
  userSockets[token.username].splice(index, 1);
  if( userSockets[token.username].length === 0 ) {
    delete userSockets[token.username];
  }
}