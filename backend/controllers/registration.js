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
    console.log(req.body);
    console.log('======================');
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    // const hashedPassword = setPassword(req.body.password);
    // console.log(hashedPassword);
    Player.add(username, password, email)
    // .then(async () => {
    //     // can log req.body.email here
    //     const player = await Player.getByEmail(`${req.body.email}`);
    //     console.log("addedplayer", player);
    //     // player.setPassword(`${req.body.password}`);
    //     // await player.updatePassword();
    //     // console.log('you did the thing')
        
    // })
}
module.exports = {
    addPlayer,
    playerRegistration
}