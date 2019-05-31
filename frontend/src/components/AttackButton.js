import React from 'react'
import style from '../StyleSheets/Buttons.module.css'
export default function AttackButton({name,doDamage1, doDamage2, name2}) {

    return (
        <div className={style.attackButtons}>
            <button 
            className={style.attackButton}
            onClick={doDamage1} >{name}
            </button>
            <button 
            className={style.attackButton}
            onClick={doDamage2} >{name2} 
            </button>
        </div>
    )
}


