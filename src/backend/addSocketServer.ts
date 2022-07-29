import WebSocket, { createWebSocketStream, WebSocketServer } from 'ws';
import { showMessage } from '../utils/index';
import { CLOSE_SOCKET, START_SOCKET } from '../settings/index';
import { readCommand } from './routing';

const wsStartHandler = async (socket: WebSocket.WebSocket) => {
  const duplex = createWebSocketStream(socket, { encoding: 'utf8', decodeStrings: false });

  showMessage(START_SOCKET);

  duplex.on('data', (data: string) => {
    readCommand(duplex, data);
  });

  socket.on('close', () => {
    duplex.destroy();
    socket.close();
  });
};

export const createSocketConnection = (port: number) => {
  const ws = new WebSocketServer({
    port: port,
  });

  ws.on('connection', (socket) => wsStartHandler(socket));

  ws.on('error', (error) => {
    console.log('Error! - ', error);
  });

  process.on('SIGINT', () => {
    showMessage(CLOSE_SOCKET);
    ws.close();
  });
  process.on('exit', () => {
    showMessage(CLOSE_SOCKET);
    ws.close();
  });
};
