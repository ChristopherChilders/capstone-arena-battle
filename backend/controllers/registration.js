const Player = require('../models/Player');
async function playerRegistration(req,res) {
    res.render('registration', {
        locals: {
            username: '',
            password: '',
            email: ''
        }
    });
}


async function addPlayer(req, res) {
    console.log("req.body",req.body);
    console.log('======================');
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    console.log("req.body.email", req.body.email);
    

    const newPlayer = await Player.add(username, email, password);
    res.json(newPlayer);
    console.log(`the added player was givien the email ${newPlayer.email}`);

}
module.exports = {
    addPlayer,
    playerRegistration
}