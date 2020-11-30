import React, {useState} from 'react'
import pic from './img/pic.png';
import './Carousel.css';

function Carousel() {
    const [img, setImg] = useState([
        {
            image: pic,
            text: "Vestibulum ante ips",
            id: 1
        },
        {
            image: pic,
            text: "Vestibulum ante ips",
            id: 2
        },
        {
            image: pic,
            text: "Vestibulum ante ips",
            id: 3
        },
        {
            image: pic,
            text: "Vestibulum ante ips",
            id: 4
        },
        {
            image: pic,
            text: "Vestibulum ante ips",
            id: 5
        }
    ])

    return (
        <div className="carousel__main">
        <div className="carousel__title">
            <p><strong>Games you will Build</strong></p>
            <p>Know More <span className="arrow">⟶</span></p>
        </div>
        <div className="carousel">
            {img.map(item=>(
                <div className="card">
                <img src={item.image}/>
                <div className="container">
                    <p>{item.text}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    )
}

export default Carousel
