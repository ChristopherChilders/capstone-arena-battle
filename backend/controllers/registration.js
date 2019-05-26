const Player = require('../models/Player')

async function goToRegistration(req, res) {
    res.render('registration')
}

export default {
    goToRegistration
}