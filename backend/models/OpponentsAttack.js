const db = require('./conn');
const Opponent = require('./Opponent');

class OpponentAttack {
    constructor(id, opponents_id, name, summary, damage, abilities, targets){
        this.id = id;
        this.opponentsId = opponents_id;
        this.name = name;
        this.summary = summary;
        this.damage = damage;
        this.abilities = abilities;
        this.targets = targets;
    }
    static getAll(){
       return db.any(`select * from opponents_attacks`)
    .then((arrayOfAttacks) => {
        return arrayOfAttacks.map((attackData) => {
            const aAttack = new OpponentAttack(
            attackData.id,
            attackData.opponents_id,
            attackData.name,
            attackData.summary,
            attackData.damage,
            attackData.abilities,
            attackData.targets
            );
            return aAttack;
        })
    })
}
    static getAttackById(id){
        return db.one(`select * from attacks where id=$1`, [id])
        .then((attackData) => {
            const attackInstance = new OpponentAttack(
                attackData.id,
                attackData.opponents_id,
                attackData.name,
                attackData.summary,
                attackData.damage,
                attackData.abilities,
                attackData.targets
            );
            return attackInstance;
        })
    }

    static getAttacksByCharacter(opponentsId){
        return db.any(`select * from attacks where opponents_id=$1`, [opponentsId])
        .then((attackData) => {
            return attackData.map((attackData) => {
                const aAttack = new OpponentAttack(
                attackData.id,
                attackData.opponents_id,
                attackData.name,
                attackData.summary,
                attackData.damage,
                attackData.abilities,
                attackData.targets
                );
                return aAttack;
            })
        })
    }

    static getAttacksByAbilites(abilities){
        return db.any(`select * from attacks where abilities=$1`, [abilities])
        .then((attackData) => {
            const attackInstance = new OpponentAttack (
                attackData.id,
                attackData.opponents_id,
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

module.exports = OpponentAttack;