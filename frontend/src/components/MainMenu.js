import React from 'react'
import style from '../StyleSheets/MainMenu.module.css'


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
                        <h1> this will find a match </h1>
                    </div>

                    <div className={style.MenuItem}>
                        <h1> this will go to settings</h1>
                    </div>

                    <div className={style.MenuItem}>
                        <h1> this will log you out? fugg :DDD</h1>
                    </div>
                </div>
            </div>
        )
    }
}






export default MainMenu