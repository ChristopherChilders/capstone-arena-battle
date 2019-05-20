// const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

const User = require('../models/Player');
const Character = require('../models/Character');
const Attack = require('../models/Attack');

describe('Users model', () => {
    it('Should be able to get an array of Users', async () => {
        const theUsers = await User.getAll();
        expect(theUsers).to.be.an.instanceOf(Array);
    });
    it('should get one user by id', async () => {
        const theUser = await User.getById(1);
        expect(theUser).to.be.an.instanceOf(User);
    });
})

describe('Users model', () => {
    it('should be able to retrieve all user data', async () => {
        const allUsers = await User.getAll();
        allUsers.should.be.an.instanceOf(Array);
    });

    it('should be able to retrieve by id', async () => {
        const theUser = await User.getById(3);
        theUser.should.be.an.instanceOf(User);
    });
});

describe('Characters model', () => {
    it('should be able to get an array of Characters', async () => {
        const theCharacter = await Character.getAll();
        expect(theCharacter).to.be.an.instanceOf(Array)
    })
})

describe('Characters model', () => {
    it('should be able to get an array of Attacks made by the Character', async () => {
        const theAttacks = await Character.getAttacksByCharacter(1);
        expect(theAttacks).to.be.an.instanceOf(Attack)
    })
})