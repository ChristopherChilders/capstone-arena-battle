const db = require('./conn');
const Attack = require('./Attack');

class Character {
    constructor(id, name, life, power, toughness, accuracy, initiative, experience, level){
        this.id = id;
        this.name = name;
        this.life = life;
        this.power = power;
        this.toughness = toughness;
        this.accuracy = accuracy;
        this.initiative = initiative;
        this.experience = experience;
        this.level = level;
    }

    static getAll(){
        return db.any(`select * from characters`)
        .then((arrayOfCharacters) => {
            return arrayOfCharacters.map((characterData) => {
                const aCharacter = new Character(
                    characterData.id,
                    characterData.name,
                    characterData.life,
                    characterData.power,
                    characterData.toughness,
                    characterData.accuracy,
                    characterData.initiative,
                    characterData.experience,
                    characterData.level
                );
                return aCharacter
            })
        })
    }

    static getById(id){
        return db.one(`select * from users where id=$1`, [id])
        .then((characterData) => {
            const characterInstance = new Character(
                characterData.id,
                characterData.name,
                characterData.life,
                characterData.power,
                characterData.toughness,
                characterData.accuracy,
                characterData.initiative,
                characterData.experience,
                characterData.level
            );
            return characterInstance;
        })
    }

    static getByName(name){
        return db.one(`select * from characters where name=$1`, [name])
    }

    static getAttacksByCharacter(charactersId){
        return db.any(`select * from attacks where characters_id=$1`, [charactersId])
        .then((attackData) => {
            const attackInstance = new Attack(
                attackData.id,
                attackData.characters_id,
                attackData.name,
                attackData.summary,
                attackData.damage,
                attackData.abilities,
                attackData.targets
            );
            return attackInstance;
        })
    }
}

module.exports = Character;