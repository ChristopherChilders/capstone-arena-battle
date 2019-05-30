import React from 'react'

export default function AttackButton({name,doDamage1, doDamage2, name2}) {

    return (
        <div>
            <button onClick={doDamage1} >{name}
            </button>
            <button onClick={doDamage2} >{name2} 
            </button>
        </div>
    )
}


