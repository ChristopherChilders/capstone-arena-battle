import React from 'react';
import gitguy2 from '../Images/gitguy2.gif';
import gitguy2Attack from '../Images/gitguy2(attack).gif';


export default function playerOneComponent({newHealth, attackGate}) {
    
  let healthCalc = (newHealth/100)*450

  const healthStyleGREEN = {
    stroke:'black',
    strokeWidth: '2',
    fill: 'green',
    fillOpacity: '100',
}
if(attackGate){
  return (
    <svg width="100%" height="100%">
          <rect style={healthStyleGREEN}
        x="15"
        y="55"
        width={healthCalc}
        height="50"
        />
        <image x="-75" y="230" width="50%" height="60%" href={gitguy2Attack}/>
    </svg>
  )
} else {
  return (
    <svg width="100%" height="100%">
          <rect style={healthStyleGREEN}
        x="15"
        y="55"
        width={healthCalc}
        height="50"
        />
        <image x="-75" y="230" width="50%" height="60%" href={gitguy2} />
    </svg>
  )
}



// return (
//   <svg width="100%" height="100%">
//         <rect style={healthStyleGREEN}
//       x="15"
//       y="55"
//       width={healthCalc}
//       height="50"
//       />
//       <image x="-75" y="230" width="50%" height="60%" href={gitguy2Attack}/>
//       <image x="-75" y="230" width="50%" height="60%" href={gitguy2} />
//   </svg>
// )
}
