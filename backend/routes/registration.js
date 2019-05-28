const express = require('express');
const Router = express.Router;
const registrationRouter = Router();
const {goToRegistration} = require('../controllers/registration');
const Player = require('../models/Player');

registrationRouter.get('/', goToRegistration);

registrationRouter.post('/', (req, res) => {
    console.log(req.body);
    console.log('======================');
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    // const hashedPassword = setPassword(req.body.password);
    // console.log(hashedPassword);
    Player.add(username, password, email)
    .then(async () => {
        const player = await Player.getByEmail(`${req.body.email}`);
        console.log(player);
        player.setPassword(`${req.body.password}`);
        await player.updatePassword();
        console.log('you did the thing')
        
    })
    .catch(err => {
        console.log(err);
        console.log('////////////////////////')
        res.redirect('/registration');
    })
    .then(newUser => {
        console.log(newUser);
        req.session.user = newUser;
        res.redirect('/login');
    })
})


module.exports = registrationRouter;