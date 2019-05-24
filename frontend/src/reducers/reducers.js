import startGame from './startGame';
import P1Health from './P1Health';
import {START_GAME,P1HEALTH} from '../actions';

const initialGameState={
    started: false,
    P1Health: 1,
}

function reducer(state = initialGameState,action){
    switch(action.type){
        case START_GAME:
            return startGame(state, initialGameState);
        break;
        case P1HEALTH:
            return P1Health(state)
        break;
        default:
            return state;
    }
}

export default reducer