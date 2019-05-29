const express = require('express');
const Router = express.Router;
const registrationRouter = Router();
const {addPlayer, playerRegistration} = require('../controllers/registration');
registrationRouter.get('/', playerRegistration);
registrationRouter.post('/', addPlayer);



module.exports = registrationRouter;