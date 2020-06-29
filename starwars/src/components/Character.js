// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"


const Character = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        //getting API data from:
        axios.get(`https://rickandmortyapi.com/api/character`)
        .then(res => {
            console.log('Response from useEffect of MainCharacter', res);
            setData(res.data);
        },[] )
        .catch(err => {
            console.log('Error occured in useEffect of Character', err);
        });
    });

    return (
    
            <div>
                <CharacterCard />
            </div>

    )
}

export default Character;