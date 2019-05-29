import React from 'react'

export default function AttackButton({damage,name,life}) {
    // console.log()
    return (
        <div>
            <button onClick={life} >{name}
            </button>
        </div>
    )
}
