import { connect } from 'react-redux';
// import components
// actions here
const mapStateToProps = (state)=>{
    return{
        // react-prop: redux-state
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        // react-prop: react-dispatch
    }
}

const makePlayerOneSmart = connect(mapDispatchToProps,mapStateToProps)

const SmartPlayerOne = makePlayerOneSmart(
    //components here
    
    )

export default SmartPlayerOne;