require('dotenv').config();

// const http = require('http');
// const express = require('express');
// const app = express();
// const server = http.createServer(app);
const PORT = process.env.PORT;
// const db = require('./models/conn');
// const Player = require('./models/Player')

// const WebSocket = require('ws');
// const wss = new WebSocket.Server({
//     server,                 // pidggyback on the plain http server
//     path: '/game',          // listen on only one route, allowing express to listen on its custom  routes
//     port: 4346
// })

// wss.on('connection', (socket) => {
//     console.log('There is a new connection');
//     socket.send(JSON.stringify(db));

//     socket.on('message', async (e) => {
//         const { message } = JSON.parse(e);
//         console.log(`here's you're event data: ${e}`, message);

//     })
// })

// // const path = require('path');
// // const socketIo = require('socket.io');

// const bodyParser = require('body-parser');
// app.use(express.urlencoded({extended: true}));
// app.set('port', PORT);
// app.get('/', (req, res) => {
//     // console.log(req)
//     res.json(db)
// })
// app.post('/login', (req,res) => {
//     console.log(req.body);
// })

// app.listen(PORT, () => {
//     console.log(`You're running on port ${PORT}`)
// })

const http = require('http');
const express = require('express');
const app = express();
const WebSocket = require('ws');
const db = require('./models/conn');
const Player = require('./models/Player')

const server = http.createServer(app);
const wss = new WebSocket.Server({
    path: '/ws',
    server,
    port: 4000
});

app.use(express.urlencoded({extended: true}));

wss.on('connection', async (socket) => {
    console.log('new connection');
    const player = await Player.getAll();
    socket.send(JSON.stringify(player));
    socket.on('message', (data) => {
        const { message } = JSON.parse(data);
        console.log(`recieved: %s`, message);
        wss.clients.forEach((client) => {
            if(client.readyState === WebSocket.OPEN){
                client.send(JSON.stringify(db));
            }
        });
    });
});

server.listen(PORT, ()=> {
    console.log('you can do this, Chris');
})