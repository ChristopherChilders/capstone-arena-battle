import React from 'react'
import style from '../StyleSheets/LandingPage.module.css'
import { 
    Link
} from 'react-router-dom'
import Emrboider from '../Images/TitleEmbroider2.png'


class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render(){
        return (
            <div className={style.HeroImage}>
                <div className={style.title}>
                    <h1> B R A W L  </h1>
                        <img src={Emrboider}></img>
                </div>

                <div className={style.Login}>
                    <h1>
                        <Link to='login'> --Log in-- </Link>
                    </h1>
                    <h2>
                    <Link to='registration'> --Register an account-- </Link>
                    </h2>
                </div>
            </div>
        )
    }
}



export default LandingPage

