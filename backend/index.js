require('dotenv').config();

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const PORT = process.env.PORT;
const http = require('http');
const express = require('express');
const app = express();
const WebSocket = require('ws');
const db = require('./models/conn');
const Attack = require('./models/Attack');
const Player = require('./models/Player');
const Characters = require('./models/Character');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session({
    store: new FileStore(),
    secret: process.env.SESSION_SECRET
}));
app.set('port', PORT);
app.get('/', (req, res) => {
    // console.log(req)
    res.json(db)
})
// const path = require('path');
// const socketIo = require('socket.io');
const logInRouter = require('./routes/login');
app.use('/login', logInRouter);

app.post('/login', (req,res) => {
    console.log(req.body);
})


// const registrationRouter = require('./routes/registrationRouter');
// app.use('/registration', registrationRouter);

const server = http.createServer(app);
const wss = new WebSocket.Server({
    path: '/ws',
    server,
    port: 4000
});

app.use(express.urlencoded({extended: true}));

// This is how you set up a websocket 'connection'
wss.on('connection', async (socket) => {
    console.log('new connection');
    const attack = await Attack.getAll();
    const player = await Player.getAll();
    const characters = await Characters.getAll();
    // Websockets requires the information that you send to be one string
    // Thus, our solution is this: 
    const data = JSON.stringify({attack,player,characters})
    // { {object: array}, {object: array}, {object: array} }
    // Then we send "data" from our database to our react app
    socket.send(data);
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
    console.log('Hello World!');
})
