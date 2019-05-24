import React from 'react'
import PropTypes from 'prop-types;'
export default function PlayerOne(props) {
    const healthStyle = {
        stroke:'black',
        strokeWidth: '2',
        fill: 'green',
        fillOpacity: '100',
    }
  return (
    <svg width="100%" height="100%">
        <rect style={healthStyle}
        x="15"
        y="70"
        width="450"
        height="50"
        />
    </svg>
  )
}
