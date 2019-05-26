const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models/conn');

router.post('/registration', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;
    const selectUserQuery = `SELECT * from users where email = $1;`;
    db.query(selectUserQuery,[email]
        .then((results) => {
        if (results.length === 0){
            const insertUserQuery = `insert into users (email,hash,username)
            values($1,$2,$3);`;
            const hash = bcrypt.hashSync(password);
            db.query(insertUserQuery, [email,hash,username]
                .then((results) => {
                    res.json({
                        email,
                        msg:addedUser
                    })
                }).catch((error)=> {
                    if(error){throw error}
                }))
        } else{
            res.json({
                msg: 'user already exists'
            })
        }
    }).catch((error) => {
        if(error){throw error}
    }))
})