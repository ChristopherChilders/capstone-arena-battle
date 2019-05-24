export const START_GAME = 'START_GAME';
export const P1HEALTH = 'P1HEALTH';
export function startGame(){
    return {
        type: START_GAME
    }
}
export function P1Health(){
    return{
        type: P1HEALTH
    }
}