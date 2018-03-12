const http = require('http');
const server = http.createServer();
const { createReadStream } = require('fs');


server.on('request', (req, res) => {
  let readableStream = createReadStream('/Users/hkphillips42/workspace/exercises/Node-Basics/HTTP-server/index.html');
  readableStream.pipe(res);
});
server.listen(8081);