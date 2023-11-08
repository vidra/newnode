
let http = require('http');

let server = http.createServer( function (req, res) {
 res.writeHead( 200, {'Content-Type':'text/plain'});
 res.end('Hello. It is new server');
});
server.listen(8080,'localhost');
console.log('Server run on port 8080');
