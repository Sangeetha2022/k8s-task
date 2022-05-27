
  
const http = require('http');

const port = process.env.PORT || 3000;

const requestHandler = (request, response) => {
    console.log('Received request for URL: ' + request.url);
    response.writeHead(200);
    response.end('Hello World!San k8s task1');
};

const server = http.createServer(requestHandler);

server.listen(port, (error) => {
    if (error) throw error;
    console.log(`Your app is running on port ${port}`);
});
