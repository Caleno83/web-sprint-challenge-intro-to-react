import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"

const SecondCharacter = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/6,7,8,9,10,11,12,13,14,15,16,17,18,19,20`)
        .then(res => {
            console.log('Response from useEffect of SecondCharacter', res);
            setData(res.data);
        }, [])
        .catch(err => {
            console.log('Error occured in useEffect of Character', err);
        });
    });

    
    return (
    
            <div>
                {data.map(p => (
   
                <CharacterCard 
                    key={p.id} 
                    name={p.name}
                    gender={p.gender}
                    origin={p.origin.name}
                    location={p.location.name}
                    status={p.status}
                    species={p.species}
                    image={p.image} />
                ))}
            </div>
    )
}

export default SecondCharacter;