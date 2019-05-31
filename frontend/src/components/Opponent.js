
// import {damageReceived} from './utils';
// import Background from './Background';
import React from 'react'
import diceMan2 from '../Images/diceman2.gif';
import diceMan2Attack from '../Images/diceman2(attack).gif';

export default function Opponent({newHealth, attackGate}) {

    let healthCalc = (newHealth/100)*450

    const healthStyleGREEN = {
        stroke:'black',
        strokeWidth: '2',
        fill: 'green',
        fillOpacity: '100',
    }
    // console.log(health)
    if(attackGate){
      return (
        <svg width="100%" height="100%">
              <rect style={healthStyleGREEN}
            x="735"
            y="55"
            width={healthCalc}
            height="50"
            />
            <image x="650" y="230" width="50%" height="60%" href={diceMan2Attack} />
        </svg>
    
      )
    }else{
      return (
        <svg width="100%" height="100%">
              <rect style={healthStyleGREEN}
            x="735"
            y="55"
            width={healthCalc}
            height="50"
            />
            <image x="650" y="230" width="50%" height="60%" href={diceMan2} />
        </svg>
    
      )
    }

}


