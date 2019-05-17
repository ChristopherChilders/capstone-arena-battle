const db = require('./conn');
const bcrypt = require('bcryptjs');

class Player {
    constructor(id, username, email, password, created_at) {
        this.id = id;
        this.userName = username;
        this.email = email;
        this.password = password;
        this.createdAt = created_at;
    }

    static add(username, email, password, created_at){
        return db.one(`
        insert into players
        (username, email, password, created_at)
        values
        ($1, $2, $3, $4)
        returing id, username, email, password, created_at`, [username, email, password, created_at])
        .then((data) => {
            return data.id;
        })
    }

    static delete(id){
        return db.result('delete from users where id=$1', [id]);
    }

    static getAll(){
        return db.any(`select * from players`)
        .then((arrayOfPlayers) => {
            return arrayOfPlayers.map((playerData) => {
                const aPlayer = new Player (
                    playerData.id, 
                    playerData.username,
                    playerData.email,
                    playerData.password,
                    playerData.created_at
                );
                return aPlayer;
            })
        })
    }
    
    static getById(id){
        return db.one(`select * from players where id=${id}`)
        .then((playerData) => {
            const playerInstance = new Player(
                playerData.id, 
                playerData.username,
                playerData.email,
                playerData.password,
                playerData.created_at                
            );
            return playerInstance;
        })
        .catch(() => {
            return null;
        })
    }

    static getByEmail(email){
        return db.one(`select * from players where email=$1`, [email])
        .then(playerData => {
            const aPlayer = new Player(
                playerData.id, 
                playerData.username,
                playerData.email,
                playerData.password,
                playerData.created_at
            );
            return aPlayer;
        })
    }

    save(){
        return db.result(`
        update players set
        username='${this.username}'
        email='${this.email}'
        password='${this.password}'
        created_at='${this.created_at}'`)
    }

    setPassword(newPassword){
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(newPassword, salt);
        this.password = hash;
    }

    checkPassword(aPassword){
        return bcrypt.compareSync(aPassword, this.password);
    }

    updatePassword(){
        return db.result(`
        update players
        set password='${this.password}'
        where id=${this.id}`)
    }
}

module.exports = Player;