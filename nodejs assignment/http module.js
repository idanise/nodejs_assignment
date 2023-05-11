/*
The http module in Node.js provides an API for 
creating HTTP servers and making HTTP requests. 
It allows you to handle HTTP requests and responses, 
create server applications, send HTTP requests to external servers, and more
*/

const http = require('http')


const server = http.createServer(function(req, res){
    res.end('Hello world')
})

const port = process.env.PORT || 3001

server.listen(port, () => {
    console.log(`Server has started on port ${port}`);
} )


