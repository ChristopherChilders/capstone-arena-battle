const express = require('express');
const Router = express.Router;
const loginRouter = Router();
const {loginPlayer, logIn} = require('../controllers/login');

loginRouter.get('/', logIn);
loginRouter.post('*', loginPlayer);

module.exports = loginRouter;