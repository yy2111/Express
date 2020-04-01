// Build a server with Node's HTTP module
const http = require('http');
const port = 3001;
const server = http.createServer();

//set our server to handle a request and display 
// the URL requested on the server side, 
// and display a Hello, server! message to the 
// client on the response side.
server.on('request', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.end('Hello, server!')
})

// Start the server
server.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server is listening on port ${port}`)
})