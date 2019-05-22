require('dotenv').config();
const session = require('express-session');
const FileStore = require('session-file-store')(session);
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
    path: '/',           // listen on only one route, allowing express to listen on its custom  routes
    port: 4346
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

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: true}));
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

app.listen(PORT, () => {
    console.log(`You're running on port ${PORT}`);
})


// const registrationRouter = require('./routes/registrationRouter');
// app.use('/registration', registrationRouter);