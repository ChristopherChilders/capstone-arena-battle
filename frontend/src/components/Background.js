import React from 'react'
import stickImage from '../Images/pixil-frame-0.png';
import PlayerOneComponent from './playerOneComponent';
import Opponents from './Opponent';
import AttackButton from './AttackButton';

class Background extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: 0,
            characters_id: "",
            name: "",
            summary:"",
            damage: 5,
            abilities:'',
            targets: '',
            startHealth: 1,
        }
      }
      componentDidMount(){
        const url = `ws://localhost:4000/ws`;
        this.connection = new WebSocket(url);
        this.connection.onmessage = (e) => {
        // console.log(e);
        let newData =JSON.parse(e.data);
        console.log(newData)

        this.setState({
            // characters
            // characters_id1: newData.attack[0].charactersId,
            characterName1: newData.characters[0].name,
            characterPower1: newData.characters[0].power,
            characterToughness1: newData.characters[0].toughness,
            characterLife1: newData.characters[0].life,

            //  character attacks
            // id: newData.attack[0].id,
            character1Attack1Name: newData.attack[0].name,
            character1Attack1Summary: newData.attack[0].summary,
            character1Attack1Damage: newData.attack[0].damage,
            character1Attack2Name: newData.attack[1].name,
            character1Attack2Summary: newData.attack[1].summary,
            character1Attack2Damage: newData.attack[1].damage,

            // Opponents
            opponentName1: newData.opponents[0].name,
            opponentLife1: newData.opponents[0].life,
            opponentPower1: newData.opponents[0].power,
            opponentToughness1: newData.opponents[0].toughness,

            // opponent1 attacks
            opponent1Attack1Name: newData.opponentsAttack[0].name,
            opponent1Attack1Summary: newData.opponentsAttack[0].summary,
            opponent1Attack1Damage: newData.opponentsAttack[0].damage,
            opponent1Attack2Name: newData.opponentsAttack[1].name,
            opponent1Attack2Summary: newData.opponentsAttack[1].summary,
            opponent1Attack2Damage: newData.opponentsAttack[1].damage,

            // abilities: newData.attack[0].abilities,
            // targets: newData.attack[0].targets,
            // character: newData.characters[0].id,
            // characterName: newData.characters[0].name,
        })

        }
    }

    render() {
        const imageStyle ={
            fillOpacity:"0",
        }
        const style = {
            stroke:'#e71818',
            strokeWidth: '5',
            fill: '#FFFFFF',
            fillOpacity: '0',
        }
        const healthStyle = {
            stroke:'black',
            strokeWidth: '2',
            // strokeOpacity:"0.5",
            fill: 'green',
            fillOpacity: '100',
        }
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
        <svg width="1300" height="925" >
                <image x="5" y="5" width="1200" height="900"href={stickImage} style={imageStyle}/>
                <rect 
                x="5"
                y="5"
                style={style}
                width="1200"
                height="900"
                rx="15"
                ry="15"
                />
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
            <PlayerOneComponent {...this.state}/>
            <Opponents newHealth={this.state.opponentLife1}/>
        </svg>
        <div>
        <AttackButton damage={this.state.character1Attack1Damage} name={this.state.character1Attack1Name} life={this._setDamage}/>
        </div>

    </div>
        
    )
    }
    _setDamage=()=>{
        console.log("_setDamage was called");
        let currentHealth = this.state.opponentLife1-this.state.character1Attack1Damage
        this.setState({
            opponentLife1: currentHealth
        })
        console.log(this.state)
    }

}

export default Background;


// {/* SVG GRID BOX */}
// {/* <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//     <defs>
//         <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
//         <path d="M 8 0 L 0 0 0 8" fill="none" stroke="gray" stroke-width="0.5"/>
//         </pattern>
//         <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
//         <rect width="80" height="80" fill="url(#smallGrid)"/>
//         <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" stroke-width="1"/>
//         </pattern>
//     </defs>

//     <rect width="100%" height="100%" fill="url(#grid)" />
// </svg> */}
// {/* SVG GRID BOX END */}