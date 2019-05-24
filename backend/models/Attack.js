const db = require('./conn');
const Character = require('./Character');

class Attack {
    constructor(id, characters_id, name, summary, damage, abilities, targets){
        this.id = id;
        this.charactersId = characters_id;
        this.name = name;
        this.summary = summary;
        this.damage = damage;
        this.abilities = abilities;
        this.targets = targets;
    }
    static getAll(){
        return db.any(`select * from attacks`)
        .then((arrayOfAttacks) => {
            return arrayOfAttacks.map((attackData) => {
                const aAttack = new Attack(
                    attackData.id,
                    attackData.characters_id,
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

    static getAttacksByAbilites(abilities){
        return db.any(`select * from attacks where abilities=$1`, [abilities])
        .then((attackData) => {
            const attackInstance = new Attack (
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

module.exports = Attack;