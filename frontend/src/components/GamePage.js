import React from 'react';
import Axios from 'axios';

export default class GamePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            character: '',
            attacks: []
        }
    }

    render(){
        return (
            <div /*className={arena}*/>
                <div /*className={userCharacter}*/></div>
                <div /*className={enemyCharacter}*/></div>
            </div>
        )
    }
};  