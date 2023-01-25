// The constant http uses the require() method to include the Hyper Text Transfer Protocol (HTTP) module, which allows node.js to transfer data over with HTTP.
const http = require('http');
const server = http.createServer((req,res)=> {
    if (req.url === '/') {
        res.write('Hello world ');
        res.write('This is our first server');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.write('This is a list of offerings');
        res.write(' at BTHS');
        res.end();
    }
});
server.listen(3000);
console.log("Listening on port 3000 ...");