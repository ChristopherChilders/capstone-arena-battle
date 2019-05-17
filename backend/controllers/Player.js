const Player = require('../models/Player');

async function addPlayer (req, res) {
    const addPlayer = await Player.add(req.body);
    console.log(`the added player was givien the id ${addPlayer}`);
}

async function deletePlayer (req, res) {
    const { id } = req.params;
    await Player.delete(id);
    console.log(`player with id: ${id} was deleted.`);
}

async function retrieveOne(req, res){
    const thePlayer = await Player.getById(req.params.id);
    res.render('players', {
        locals: {
            onePlayer: thePlayer
        }
    });
}