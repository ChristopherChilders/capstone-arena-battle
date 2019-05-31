import React from 'react';
// Import the css Animation from your stylesheets
import animation from '../StyleSheets/characterAnimation.module.css'

import notVictor from '../Images/NOTvictor.png';


const CharacterAnimation = props => {
    const cssAnimations = [
        animation.FirstAttack,
        props.show ? animation._startAnimation : animation._stopAnimation
    ];
    return(
        <div className={cssAnimations.join(' ')}>
            <image x="-220" y="100" width="75%" height="75%" href={notVictor} />
        </div>
    );
}

export default CharacterAnimation;