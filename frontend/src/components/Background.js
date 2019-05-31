import React from 'react'
import stickImage from '../Images/Background2.gif';
import sicklyCobald from '../Images/sicklycobald.png';
import notVictor from '../Images/NOTvictor.png';
import PlayerOneComponent from './playerOneComponent';
import Opponents from './Opponent';
import AttackButton from './AttackButton';
import CharacterAnimation from './CharaterAnimation';

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
            animation: false
        }
    }
      componentDidMount(){
        //   This is where you have your first chance to affect state,
        //   So, this is the first place that you can plug in your websocket connection
        const url = `ws://localhost:4000/ws`;
        this.connection = new WebSocket(url);
        this.connection.onmessage = (e) => {
        // console.log(e.data);
        let newData =JSON.parse(e.data);
        console.log(newData)
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


        const healthStyleRED = {
            stroke:'black',
            strokeWidth: '2',
            // strokeOpacity:"0.5",
            fill: 'red',
            fillOpacity: '100',
        }
        // console.log(this.state.damage)
      return (
          
    <div>

        <svg  width="1300" height="925" >
                <image x="5" y="5" width="1200" height="900"href={stickImage}/>
                    
                    <image x="500" y="100" width="75%" height="75%" href={sicklyCobald} />
                    
                   
                    <image x="-220" y="100" width="75%" height="75%" href={notVictor} />
                   
                <rect style={healthStyleRED}
                x="15"
                y="55"
                width="450"
                height="50"
                />
                <rect style={healthStyleRED}
                x="745"
                y="55"
                width="450"
                height="50"
                />
            <PlayerOneComponent  newHealth={this.state.characterLife1} />
            <Opponents newHealth={this.state.opponentLife1}/>
        </svg>
        <div>
            <button onClick={this._gameStart}>START</button>
        </div>
        <div>
            <AttackButton  show={this.state.animation} /*closed={this._stopAnimation}*/ name={this.state.character1Attack1Name} doDamage1={this._setFirstAttack} doDamage2={this._setSecondAttack}  name2={this.state.character1Attack2Name}/>
            <CharacterAnimation />
        </div>
    </div>
    )
    }

    _setFirstAttack=()=>{
        if (this.state.start){

            console.log("_setFirstAttack was called");
            let currentOpponentHealth = this.state.opponentLife1-this.state.character1Attack1Damage
            
            // console.log('damange calculation')
            this.setState({
                opponentLife1: currentOpponentHealth,
            },()=>{setTimeout(this._monsterAttack,200)} ,this._endGame)
        }
    }
    
    _setSecondAttack=()=>{
        if (this.state.start){
            console.log("_setSecondAttack was called");
            console.log(this.state.character1Attack2Name)
            let currentOpponentHealth = this.state.opponentLife1-this.state.character1Attack2Damage
            // console.log('damange calculation')
            this.setState({
                opponentLife1: currentOpponentHealth,
            },()=>{setTimeout(this._monsterAttack,200)}, this._endGame)
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
            
            console.log(array);
            return array;
        }
        shuffle(attackArray)
        let currentPlayerHealth = this.state.characterLife1-attackArray[0];
        this.setState({
            characterLife1: currentPlayerHealth
        }, this._endGame)
    }
    _gameStart=()=>{
        this.setState({
            start: true,
        })
    }

    _endGame=()=>{
        if (this.state.characterLife1<= 1){
            console.log('look at me, currentHealth Check <1')
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
            console.log('look at me, currentHealth Check <1')
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

    _startAnimation = () =>{
        this.setState({
            animation: true
        })
    }

    _stopAnimation = () =>{
        this.setState({
            animation: false
        })
    }
}

export default Background;


