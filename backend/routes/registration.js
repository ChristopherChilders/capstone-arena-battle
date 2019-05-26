// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const db = require('../models/conn');

// router.post('/registration', (req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     const username = req.body.username;
//     const selectUserQuery = `SELECT * from users where email = $1;`;
//     db.query(selectUserQuery,[email]
//         .then((results) => {
//         if (results.length === 0){
//             const insertUserQuery = `insert into users (email,hash,username)
//             values($1,$2,$3);`;
//             const hash = bcrypt.hashSync(password);
//             db.query(insertUserQuery, [email,hash,username]
//                 .then((results) => {
//                     res.json({
//                         email,
//                         msg:addedUser
//                     })
//                 }).catch((error)=> {
//                     if(error){throw error}
//                 }))
//         } else{
//             res.json({
//                 msg: 'user already exists'
//             })
//         }
//     }).catch((error) => {
//         if(error){throw error}
//     }))
// })

const express = require('express');
const Router = express.Router;
const registrationRouter = Router();
const {goToRegistration} = require('../controllers/registration');
const Player = require('../models/Player');

registrationRouter.get('/', goToRegistration);

registrationRouter.post('/', (req, res) => {
    console.log(req.body);
    console.log('======================');
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    // const hashedPassword = setPassword(req.body.password);
    // console.log(hashedPassword);
    console.log(firstName, lastName, email, username, password);
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