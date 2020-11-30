import React, {useState} from 'react'
import './Landing.css';
import ButtonLanding from './ButtonLanding'
import Carousel from './Carousel';
import Card from './Card';

function Landing() {
    const [option, setOption] = useState([
        {
            name: 'Logical Reasoning',
            id: 1
        },
        {
            name: 'Game Development',
            id: 2
        },
        {
            name: 'Programming',
            id: 3
        },
        {
            name: 'Block Coding',
            id: 4
        },
        {
            name: 'Computer Graphics',
            id: 5
        },
        {
            name: 'Story Telling',
            id: 6
        }
    ])
    console.log(option[0].name);
    return (
        <>
        <div className="landing">
            {
                option.map(item=>(
                    <ButtonLanding name={item.name} key={item.id}/>
                ))
            }
            
        </div>
        <Carousel/>
        <Card/>
        </>
    )
}

export default Landing
