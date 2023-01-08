import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Rick = ({ rickis }) => {

    const [morty, setMorty] = useState([])

    useEffect(() => {
        axios.get(rickis)
            .then(res => setMorty(res.data))
    }, [])

    console.log(morty)

    const color = ["#0F3B3D", "#136158", "#245465", "#348968"]
    const colorNew = Math.floor(Math.random()* color.length)
    document.body.style = `background: ${color[colorNew]}`
    

    return (
        <div className='rick'>
            <div className='morty'>
                <li>

                    <div id='part1'>

                        <img src={morty.image} alt="" />

                        <div className='details'>
                            <h3>{morty.name}</h3>
                            <h4>{morty.status}-{morty.species}</h4>
                            <p>Origin </p>
                            <h4>{morty.origin?.name}</h4>
                            <p>
                                Episodes where appear
                            </p>
                            <b>1</b>
                        </div>
                    </div>
                </li>
            </div>
        </div>
    );
};

export default Rick;