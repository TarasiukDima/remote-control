import { createReadStream } from 'fs';
import { resolve, dirname } from 'path';
import { createServer } from 'http';

export const httpServer = createServer((req, res) => {
  const __dirname = resolve(dirname(''));
  const file_path = __dirname + (req.url === '/' ? '/front/index.html' : '/front' + req.url);
  const readFileStream = createReadStream(file_path);
  let body = '';

  readFileStream.on('data', (data) => {
    body += data.toString();
  });

  readFileStream.on('end', () => {
    res.writeHead(200);
    res.end(body);
  });

  readFileStream.on('error', (err) => {
    res.writeHead(404);
    res.end(JSON.stringify(err));
  });
});
