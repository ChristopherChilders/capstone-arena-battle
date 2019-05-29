const db = require('./conn');
const Attack = require('./OpponentsAttack');

class Opponent {
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
        return db.any(`select * from Opponents`)
        .then((arrayOfOpponents) => {
            return arrayOfOpponents.map((OpponentData) => {
                const aOpponent = new Opponent(
                    OpponentData.id,
                    OpponentData.name,
                    OpponentData.life,
                    OpponentData.power,
                    OpponentData.toughness,
                    OpponentData.accuracy,
                    OpponentData.initiative,
                    OpponentData.experience,
                    OpponentData.level
                );
                return aOpponent
            })
        })
    }

    static getById(id){
        return db.one(`select * from users where id=$1`, [id])
        .then((OpponentData) => {
            const OpponentInstance = new Opponent(
                OpponentData.id,
                OpponentData.name,
                OpponentData.life,
                OpponentData.power,
                OpponentData.toughness,
                OpponentData.accuracy,
                OpponentData.initiative,
                OpponentData.experience,
                OpponentData.level
            );
            return OpponentInstance;
        })
    }

    static getByName(name){
        return db.one(`select * from Opponents where name=$1`, [name])
    }

    static getAttacksByOpponent(OpponentsId){
        return db.any(`select * from attacks where Opponents_id=$1`, [OpponentsId])
        .then((attackData) => {
            const attackInstance = new Attack(
                attackData.id,
                attackData.Opponents_id,
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

module.exports = Opponent;