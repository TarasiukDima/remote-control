import 'dotenv/config';
import { httpServer } from './http_server/index';
import { createBackendConnection } from './backend';

const HTTP_PORT = Number(process.env.PORT_HTTP) || 3000;
const WS_PORT = Number(process.env.PORT_WS) || 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
createBackendConnection(WS_PORT);
