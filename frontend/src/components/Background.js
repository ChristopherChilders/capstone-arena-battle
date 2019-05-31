import React from 'react'
import backgroundImage from '../Images/Background2.gif';

import PlayerOneComponent from './playerOneComponent';
import Opponents from './Opponent';
import AttackButton from './AttackButton';
import styled from 'styled-components';
import style from '../StyleSheets/Buttons.module.css'

class Background extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: 0,
            characters_id: "",
            name: "asdfasdf",
            summary:"",
            damage: 5,
            abilities:'',
            targets: '',
            startHealth: 1,
            start: false,
            end: false,
            player1Attack: false,
            opponent1Attack: false
        }
    }
      componentDidMount(){
        //   This is where you have your first chance to affect state,
        //   So, this is the first place that you can plug in your websocket connection
        const url = `ws://localhost:4000/ws`;
        this.connection = new WebSocket(url);
        this.connection.onmessage = (e) => {
        let newData =JSON.parse(e.data);
            this.setState({
    
                chosenAttack:0,
                // characters
                characters_id1: newData.attack[0].charactersId,
                characterName1: newData.characters[0].name,
                characterPower1: newData.characters[0].power,
                characterToughness1: newData.characters[0].toughness,
                characterLife1: newData.characters[0].life,
    
                //  character attacks
                id: newData.attack[0].id,
                character1Attack1Name: newData.attack[0].name,
                character1Attack1Summary: newData.attack[0].summary,
                character1Attack1Damage: newData.attack[0].damage,
                character1Attack2Damage: newData.attack[1].damage,
                character1Attack2Name: newData.attack[1].name,


                // Opponents
                opponentName1: newData.opponents[0].name,
                opponentLife1: newData.opponents[0].life,
                opponentPower1: newData.opponents[0].power,
                opponentToughness1: newData.opponents[0].toughness,
    
                // opponent1 attacks
                opponent1Attack1Damage: newData.opponentsAttack[0].damage,
                opponent1Attack2Damage: newData.opponentsAttack[1].damage,
                opponent1Attack3Damage: newData.opponentsAttack[2].damage,
                opponent1Attack4Damage: newData.opponentsAttack[3].damage,
                opponent1Attack5Damage: newData.opponentsAttack[4].damage,
                opponent1Attack6Damage: newData.opponentsAttack[5].damage,
                opponent1Attack7Damage: newData.opponentsAttack[6].damage,
                opponent1Attack8Damage: newData.opponentsAttack[7].damage,
    
                // abilities: newData.attack[0].abilities,
                // targets: newData.attack[0].targets,
                // character: newData.characters[0].id,
                // characterName: newData.characters[0].name,
            })
        

        }
    }

    render() {

        const borderStyle ={
            stroke:'black',
            strokeWidth: '5',
            fill: '#FFFFFF',
            fillOpacity: '0',
        };
        const healthStyleRED = {
            stroke:'black',
            strokeWidth: '2',
            fill: 'red',
            fillOpacity: '100',
        };
      return (
          

    <div className={style.gameplay}>

        <div>
          <SvgWrapper>
           <svg 
            width="75%" height="75%" viewBox="0 0 1200 900" >
                    <image x="0" y="0" width="1200" height="900"href={backgroundImage}/>
                    <rect style={healthStyleRED}
                    x="15"
                    y="55"
                    width="450"
                    height="50"
                    />
                    <rect style={healthStyleRED}
                    x="735"
                    y="55"
                    width="450"
                    height="50"
                    />
                <PlayerOneComponent  newHealth={this.state.characterLife1} attackGate={this.state.player1Attack} />
                <Opponents newHealth={this.state.opponentLife1} attackGate={this.state.opponent1Attack}/>
                <rect x="0" y="0" width="100%" height="100%" style={borderStyle}/>
            </svg>
        </SvgWrapper>
        </div>
        <div className={style.allButtons}>
            <div>
                <button 
                onClick={this._gameStart}
                className={style.startButton}
                >START</button>
            </div>
            <AttackButton  name={this.state.character1Attack1Name} doDamage1={this._setFirstAttack} doDamage2={this._setSecondAttack}  name2={this.state.character1Attack2Name}/>
        </div>
    </div>
    )
    }

    _setFirstAttack=()=>{
        if (this.state.start){

            // console.log("_setFirstAttack was called");
            this.setState({
                player1Attack:true,
                opponent1Attack:true
            },()=>{setTimeout(this._monsterAttack,300)},this._endGame)
        }
    }
    
    _setSecondAttack=()=>{
        if (this.state.start){
            // console.log("_setSecondAttack was called");
            let currentOpponentHealth = this.state.opponentLife1-this.state.character1Attack2Damage
            this.setState({
                opponentLife1: currentOpponentHealth,
                player1Attack:true,
                opponent1Attack:true
            },()=>{setTimeout(this._monsterAttack,300)}, this._endGame)
        }
    }
    _monsterAttack=()=>{
        let attackArray =[this.state.opponent1Attack1Damage, this.state.opponent1Attack2Damage, this.state.opponent1Attack3Damage, this.state.opponent1Attack4Damage]
        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
        
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
        
            // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
            }
            
            return array;
        }
        shuffle(attackArray)
        let currentPlayerHealth = this.state.characterLife1-attackArray[0];
        // let currentOpponentHealth = this.state.opponentLife1-this.state.character1Attack1Damage
            
        this.setState({
            characterLife1: currentPlayerHealth,
            // opponentLife1: currentOpponentHealth,

            player1Attack:false,
            opponent1Attack: false,
        }, this._endGame)
    }
    _gameStart=()=>{
        this.setState({
            start: true,
        })
    }

    _endGame=()=>{
        if (this.state.characterLife1<= 1){
            this.setState({
                end: true
            },
            ()=>{
                setTimeout(()=>{
                    alert('GAME OVER, I AM INEVITABLE')
                },50)
            }
            )
        }
        if (this.state.opponentLife1<= 1){
            this.setState({
                end: true
            },
            ()=>{
                setTimeout(()=>{
                    alert('YOU WIN')
                },50)
            }
            )
        }
        
    }
}
const SvgWrapper = styled.div`
display: block;
margin-left: auto;
margin-right: auto;
width: 80%;
`;


export default Background;


