const Player = require('../models/Player');

async function logIn(req, res) {
    // const theUser = await User.getByEmail(`${email}`);
    res.render('login', {
        locals: {
            email: '',
            password: '',
            message: ''
        }
    });
}

async function loginPlayer(req, res) {


    const theUser = await Player.getByEmail(req.body.email);
    const correctPassword = theUser.checkPassword(req.body.password);
    if (correctPassword) {
        req.session.user = theUser.id;
        req.session.save(() => {
            res.json({
                id: theUser.id
            })
        });
    } else {

            res.json ({
                email: req.body.email,
                message: 'Incorrect Password. Please Try Again!'
            });
    }
}
module.exports = {
    loginPlayer,
    logIn
}