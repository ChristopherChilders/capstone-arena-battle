import React from 'react'
import stickImage from '../Images/pixil-frame-0.png';

export default function Background() {
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
        <rect 
        x="5"
        y="5"
        style={style}
        width="1200"
        height="900"
        rx="15"
        ry="15"
        />
        <image x="5" y="100" width="1200" height="900"href={stickImage} />
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
