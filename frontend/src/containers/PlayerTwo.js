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

const makePlayerTwoSmart = connect(mapDispatchToProps,mapStateToProps)

const SmartPlayerTwo = makePlayerTwoSmart(
    //components here
    
    )

export default SmartPlayerTwo;