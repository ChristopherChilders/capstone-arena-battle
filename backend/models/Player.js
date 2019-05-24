const db = require('./conn');
const bcrypt = require('bcryptjs');

class Player {
    // , created_at
    constructor(id, username, email, password) {
        this.id = id;
        this.userName = username;
        this.email = email;
        this.password = password;
        // this.createdAt = created_at;
    }
    // , created_at
    static add(username, email, password){
        return db.one(`
        insert into players
        (username, email, password)
        values
        ($1, $2, $3, $4)
        returing id, username, email, password`, [username, email, password])
        .then((data) => {
            return data.id;
        })
    }

    static delete(id){
        return db.result('delete from users where id=$1', [id]);
    }

    static getAll(){
        return db.any(`select id, username, email from players`)
        .then((arrayOfPlayers) => {
            return arrayOfPlayers.map((playerData) => {
                const aPlayer = new Player (
                    playerData.id, 
                    playerData.username,
                    playerData.email,
                    playerData.password
                    // playerData.created_at
                );
                return aPlayer;
            })
        })
    }
    
    static getById(id){
        return db.one(`select * from players where id=$1`, [id])
        .then((playerData) => {
            const playerInstance = new Player(
                playerData.id, 
                playerData.username,
                playerData.email,
                playerData.password
                // playerData.created_at                
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
                playerData.password
                // playerData.created_at
            );
            return aPlayer;
        })
    }

    save(){
        // created_at='${this.created_at}
        return db.result(`
        update players set
        username='${this.username}'
        email='${this.email}'
        password='${this.password}'
        
        '`)
    }

    setPassword(newPassword){
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(newPassword, salt);
        this.password = hash;
    }

    checkPassword(aPassword){
        return bcrypt.compareSync(aPassword, this.password);
    }

    // ask chris about $1 vs ${} here
    updatePassword(){
        return db.result(`
        update players
        set password='${this.password}'
        where id=${this.id}`)
    }
}

module.exports = Player;