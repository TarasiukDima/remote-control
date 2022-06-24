import Jimp from 'jimp';
import robot from 'robotjs';
import { WebSocketServer } from 'ws';

const wsStartHandler = () => {
  console.log('good');
}

export const createBackendConnection = (port: number) => {
  const ws = new WebSocketServer({
    port: port,
  })

  ws.on("connection", wsStartHandler);
}
