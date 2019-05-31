const Player = require('../models/Player');

async function deletePlayer (req, res) {
    const { id } = req.params;
    await Player.delete(id);
    // console.log(`player with id: ${id} was deleted.`);
}

async function retrieveOne(req, res){
    const thePlayer = await Player.getById(req.params.id);
    res.render('players', {
        locals: {
            onePlayer: thePlayer
        }
    });
}

async function retrieveByEmail(req, res){
    const thePlayer = await Player.getByEmail(req.params.email);
    res.render('players', {
        locals: {
            onePlayer: thePlayer
        }
    })
}

async function retrieveAllPlayers (req, res){
    const allPlayers = await allPlayers.getAll();
    res.json(allPlayers);
}

function updatePlayer (req, res){
    res.json({message: "player has been updated"})
}

module.exports = {
    deletePlayer,
    retrieveOne,
    retrieveByEmail,
    retrieveAllPlayers,
    updatePlayer
};