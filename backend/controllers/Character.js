const Character = require('../models/Character');

async function retrieveAllCharacters(req, res){
    const allCharacters = await Character.getAll();
    res.json(allCharacters);
};

async function retrieveCharacterById(req, res){
    const theCharacter = await Character.getById(req.params.id);
    res.render('characters', {
        locals: {
            oneCharacter: theCharacter
        }
    });
}

async function retrieveCharacterByName(req, res){
    const theCharacter = await Character.getByName(req.params.name);
    res.render('characters', {
        locals: {
            oneCharacter: theCharacter
        }
    });
}

async function retieveAttacksByCharacter(req, res){
    const attacks = await Character.getAttacksByCharacter()
}

module.exports = {
    retrieveAllCharacters,
    retrieveCharacterById,
    retrieveCharacterByName
}