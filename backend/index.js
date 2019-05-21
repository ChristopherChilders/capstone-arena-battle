require('dotenv').config();

const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT;
const db = require('./models/conn');
const Player = require('./models/Player')

const WebSocket = require('ws');
const wss = new WebSocket.Server({
    server,                 // pidggyback on the plain http server
    path: '/login'           // listen on only one route, allowing express to listen on its custom  routes
})

wss.on('connection', (socket) => {
    console.log('There is a new connection');
    socket.send(JSON.stringify(db));

    socket.on('message', async (e) => {
        console.log(e);
        if(e.data.email){
            const user = await user.getByEmail(e.data.email);
            socket.send({ status: 'okay' });
        }

        // console.log(db);
        // wss.clients.forEach((client) => {
        //     if(client.readyState === WebSocket.OPEN){
        //         client.send(JSON.stringify(data));
        //     }
        // })
    })
})

// const path = require('path');
// const socketIo = require('socket.io');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.set('port', PORT);
app.get('/', (req, res) => {
    // console.log(req)
    res.json(db)
})

app.listen(PORT, () => {
    console.log(`You're running on port ${PORT}`);
})