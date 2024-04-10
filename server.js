const http = require('http');
const fs = require('fs');
const url = require('url');
const PORT = 8080;
const STATIC_ROOT = __dirname;

function contentType(url) {
  const ext = url.split('.').pop();
  const contentTypes = {
    js: 'application/javascript',
    html: 'text/html',
    css: 'text/css',
    png: 'image/png',
    jpg: 'image/jpg',
    jpeg: 'image/jpeg',
    gif: 'image/gif',
    woff: 'font/woff',
    map: 'application/octet-stream',
    wasm: 'application/wasm'
  };

  if(contentTypes[ext] === undefined) return contentTypes['html'];

  return contentTypes[ext];
}

const server = http.createServer((req, res) => {
  try {
    let pathname = url.parse(req.url).pathname;

    if(pathname === '/') pathname = '/index.html' 

    console.log(pathname);

    const fileContent = fs.readFileSync(STATIC_ROOT + pathname);
    res.writeHead(200, {'Content-Type': contentType(pathname)});

    if(fileContent === null) return res.end('not found');
    return res.end(fileContent);
  }
  catch (exception) {
    console.log('exception found..', exception);
  }
});

server.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}/`);
});