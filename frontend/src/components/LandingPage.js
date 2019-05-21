import React from 'react'
import style from '../StyleSheets/LandingPage.module.css'
import { 
    Link
} from 'react-router-dom'


class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render(){
        return (
            <div className={style.HeroImage}>
                <div className={style.title}>
                    <h1> Lorem Title Ipsum </h1>
                </div>
                <div className={style.Login}>
                    <h1>
                        <Link to='login'> Log in </Link>
                    </h1>
                    <h2>
                    <Link to='registration'> Register an account</Link>
                    </h2>
                </div>
            </div>
        )
    }
}



export default LandingPage

