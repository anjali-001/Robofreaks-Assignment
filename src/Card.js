import React from 'react'
import './Card.css';
import boy from './img/grassWithBoy.svg'
import plane from './img/plane.svg'

function Card() {
    return (
        <>
        <div className="card__bottom">
            <h2>What You get?</h2>
            <p className="card__text"><span className="tick">✓</span> Vestibulum ante ipsum</p>
            <p className="card__text"><span className="tick">✓</span> Vestibulum ante ips</p>
            <p className="card__text"><span className="tick">✓</span> Vestibulum ante</p>
            <p className="card__text"><span className="tick">✓</span> Vestibulum ante ipsum</p>
        </div>
        <img src={plane} className="plane"/>
        <img src={boy} className="boy"/>
        </>
    )
}

export default Card
