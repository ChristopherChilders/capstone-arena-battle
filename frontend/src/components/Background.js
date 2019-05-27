import React, {Component} from 'react'
import stickImage from '../Images/pixil-frame-0.png';
class Background extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: 0,
            characters_id: "",
            name: "",
            summary:"",
            damage: 0,
            abilities:'',
            targets: ''
        }
      }
      componentDidMount(){
        const url = `ws://localhost:4000/ws`;
        this.connection = new WebSocket(url);
        this.connection.onmessage = (e) => {
        console.log(e);
        let newData =JSON.parse(e.data);
        console.log(newData)
        this.setState({
            id: newData.attack[0].id,
            characters_id: newData.attack[0].charactersId,
            name: newData.attack[0].name,
            summary: newData.attack[0].summary,
            damage: newData.attack[0].damage,
            abilities: newData.attack[0].abilities,
            targets: newData.attack[0].targets,
            character: newData.characters[0].id,
            characterName: newData.characters[0].name,
            characterPower: newData.characters[0].power,
            characterToughness: newData.characters[0].toughness,
// 
// accuracy: 20
// experience: 0
// id: 2
// initiative: 20
// level: 1
// life: 100
// name: "victor"
// power: 20
// toughness: 20
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
      return (
        <svg width="2000" height="2000" >
        {/* SVG GRID BOX */}
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="gray" stroke-width="0.5"/>
                </pattern>
                <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <rect width="80" height="80" fill="url(#smallGrid)"/>
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" stroke-width="1"/>
                </pattern>
            </defs>
    
            <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* SVG GRID BOX END */}
        <g
        x="500"
        y="500">
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
            <rect style={healthStyle}
            x="15"
            y="55"
            width="450"
            height="50"
            />
            <rect style={healthStyle}
            x="745"
            y="55"
            width="450"
            height="50"
            />
        </g>
        </svg>
      )
    }
}

export default Background;