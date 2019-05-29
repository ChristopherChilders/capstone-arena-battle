
// import {damageReceived} from './utils';
// import Background from './Background';
import React from 'react'

export default function Opponent({newHealth}) {

    let healthCalc = (newHealth/100)*450
    console.log("look at===", healthCalc)
    const healthStyleGREEN = {
        stroke:'black',
        strokeWidth: '2',
        fill: 'green',
        fillOpacity: '100',
    }
    // console.log(health)
  return (
    <svg width="100%" height="100%">
          <rect style={healthStyleGREEN}
        x="745"
        y="55"
        width={healthCalc}
        height="50"
        />
    </svg>

  )
}


