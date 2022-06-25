import 'dotenv/config';
import { httpServer } from './http_server/index';
import { createSocketConnection } from './backend/addSocketServer';

const HTTP_PORT = Number(process.env.PORT_HTTP) || 3000;
const WS_PORT = Number(process.env.PORT_WS) || 8081;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
createSocketConnection(WS_PORT);

process.on('SIGINT', () => {
  httpServer.close();
});