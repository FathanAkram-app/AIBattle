
   
const express = require('express')
const cors = require("cors");
const app = express()

const bodyParser = require('body-parser')

const http = require('http');
const server = http.createServer(app);
const port = 3000 


app.use(express.static(__dirname+'/game'));

const { Server } = require("socket.io");
const { initRoutes } = require('./app/routes');
// const { initSocketConnection } = require('./app/websocket_connections');
const io = new Server(server);


app.use(bodyParser.json())
const corsOptions ={
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200,
}

app.use(cors(corsOptions))

initRoutes(app)

// initSocketConnection(io)



server.listen(port, () => {
  console.log(`🚀 listening on port ${port} 🚀`)
})