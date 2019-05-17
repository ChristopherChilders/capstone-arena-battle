import React from 'react'

export default function Background() {
    const style = {
        fill: '#0E24EB',
    }
  return (
    <svg width="1000" height="1000">
        <rect 
        x="100"
        y="100"
        style={style}
        width="500"
        height="500"/>
    </svg>
  )
}
