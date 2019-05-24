import { connect } from 'react-redux';
import playerOneComponent from '../components/playerOneComponent';
import { playerOneAction } from '../actions/playerOneAction';
// import components
// actions here
const mapStateToProps = (state)=>{
    return{
        // react-prop: redux-state
        id: state.id,
        characters_id: state.characters_id,
        name: state.name,
        summary: state.summary,
        damage: state.damage,
        abilities: state.abilites,
        targets: state.targets
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        playerOneAction: (playerOneComponent) => {
            dispatch(playerOneAction(playerOneComponent));
        },
    }
}

const makePlayerOneSmart = connect(mapDispatchToProps,mapStateToProps)

const SmartPlayerOne = makePlayerOneSmart(
    playerOneComponent    
    )

export default SmartPlayerOne;