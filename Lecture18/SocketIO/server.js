const express = require('express')
const http = require('http');
//nodejs http module to do client as well as server side stuff
//http is core networking library in nodejs.
//express is wrapper on top of http. middlewares are defined using http. Various functionalities are added by express framework above http
//like url comes in form of string.



const socketio = require('socket.io')
const app = express();
const server = http.Server(app) 
//http.Server() creates a new server but on passing an object which already has a server, it gives access of that server.
//doing this because we want entire server to run not only express app. socket.io will be added to in the server so that
//both socket app and express app work and then we listen the whole server instead of only express app.

//The socket.io server
const io = socketio(server)
//now both io and app will run on http server

const users = {}

const PORT = process.env.PORT || 2323;

io.on('connection', function (socket) {//listener for connection with clients. it runs everytime connection is created from frontend
    //this socket object is the endpoint at server side of pipeline that is formed between client and server.
    console.log("Socket created :" + socket.id)
    socket.on('msg', function (data) {//message at server socket from client socket .//this msg event from server and from the client socket above are different
        // console.log("Message from "+socket.id+" : "+data.message);
        socket.broadcast.emit('msg', { . //io.emit() sends data to all clients
            sender: users[socket.id],
            message: data.message
        })
    })
    socket.on('login', function (data) {
        users[socket.id] = data.username
        socket.emit('logged_in')
    })
    // socket.on('play', function(data) {
    //     io.emit('play', data)
    // })
})

app.use('/', express.static(__dirname + "/public_static"))

server.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})
