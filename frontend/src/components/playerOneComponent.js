import React from 'react'

export default function playerOneComponent({newHealth}) {
    
  let healthCalc = (newHealth/100)*450

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
      x="15"
      y="55"
      width={healthCalc}
      height="50"
      />
  </svg>

)
}
