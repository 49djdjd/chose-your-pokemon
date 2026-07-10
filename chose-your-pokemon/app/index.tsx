import { useState, useEffect } from "react";

const App = () => {
    const[image, setImage] = useState('');
    const[name, setName] = useState('');

    const generateImage = async () => {
        try{
            const random = Math.floor(Math.random()*1025)+1;
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/${random}');
            const pokemon = await response.json();
            //used ai to help debug this part
            const names = pokemon.name;
            const images = pokemon.sprites.front_shiny;
            setName(names);
            setImage(images);
        } catch (error){
            console.error('Error fetching pokemon:', error);
        }
    };
    return(
        <div>
            <h1>Generator</h1>
        </div>
    )

}