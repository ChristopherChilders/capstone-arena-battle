import React from 'react'
import style from '../StyleSheets/MainMenu.module.css'
import Embroider from '../Images/TitleEmbroider.png'


class MainMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { }
    }
    componentDidMount(){
        const url = `ws://localhost:4000/ws`; 
        this.connection = new WebSocket(url);
    
        this.connection.onmessage = (e) => {
        console.log(e);
        console.log(e.data);
        this.setState({
            email: '',
            password: ''
        })
        }
    }
    render () {
        return (
            <div className={style.heroimage}>
                <div className={style.MenuItems}>
                    <div className={style.MenuItem}>
                        <h1> Start </h1>
                    </div>

                    <div className={style.MenuItem}>
                        <h1> Settings </h1>
                    </div>

                    <div className={style.MenuItem}>
                        <h1> Log Out </h1>
                        <img src={Embroider}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainMenu