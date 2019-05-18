import { connect } from 'react-redux';
import Background from '../components/Background'
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

const makeBackgroundSmart = connect(mapDispatchToProps,mapStateToProps)

const SmartBackground = makeBackgroundSmart(
    //components here
    
    )

export default SmartBackground;