const express = require("express"); // Imports the Express.js framework, which is a web application framework for Node.js.
const app = express(); // Creates an instance of the Express application. This app variable is where you'll configure routes, middleware, and other settings for your web application.
const http = require("http"); // Imports the built-in Node.js http module, which is used to create an HTTP server.
const {Server} = require("socket.io"); // Destructures the Server class from the socket.io module. socket.io is a library for real-time web applications, and the Server class is used to create a WebSocket server.
const cors = require("cors"); // Imports the Cross-Origin Resource Sharing (CORS) middleware for Express. CORS is used to enable or restrict cross-origin HTTP requests.
app.use(cors()); // Applies the CORS middleware to the Express application. This allows the server to respond to requests from different origins (e.g., from a web application running on a different domain).

const server = http.createServer(app); // Creates an HTTP server using the Express application (app). This server will handle HTTP requests.

const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"],
    },
}); // Creates a new instance of the Server class from socket.io and attaches it to the existing HTTP server (server). It also configures CORS for WebSocket connections. In this case, it allows connections from http://localhost:3000 and only allows the specified methods (GET and POST).

io.on("connection",(socket)=>{
    console.log(`user connected: ${socket.id}`);
})

server.listen(3001,()=>{
    console.log("SERVER IS RUNNING");
}) // Starts the server on port 3001 and logs a message to the console once the server is running.

/*
In summary, this code sets up an Express web server,
configures CORS for HTTP requests, creates an HTTP server 
using Express, and establishes a WebSocket server using socket.io 
with CORS configured for WebSocket connections. 
The server listens on port 3001 for both HTTP and WebSocket connections.
*/

