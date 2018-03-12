const http = require('http');
const server = http.createServer();
const { createReadStream } = require('fs');

server.on('request', (req, res) => {
  console.log('Request received for: ', req.url);
  createReadStream('/Users/hkphillips42/workspace/exercises/Node-Basics/HTTP-server/index.html')
  .pipe(
    res.end('<h1>Hello World</h1>')
  )
})
server.listen(8081);