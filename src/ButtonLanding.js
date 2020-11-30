import React from 'react';
import './ButtonLanding.css'

function ButtonLanding({name}) {
    console.log("Hello");
    return (
        <div className="buttonLanding">
            <button className="buttonLanding__ind"><strong>{name}</strong></button>
        </div>
    )
}

export default ButtonLanding
