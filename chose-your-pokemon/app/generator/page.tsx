'use client';
import Link from "next/link";

import Image from "next/image";

import { useState, useEffect } from "react";

export default function App(){
    const[image, setImage] = useState('');
    const[name, setName] = useState('');
    //used ai to connect the button from home page
    const[loading, setLoading] = useState(false);

    const generateImage = async () => {
      setLoading(true);
        try{
            const random = Math.floor(Math.random()*1025)+1;
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
            const pokemon = await response.json();
            //used ai to help debug this part
            const names = pokemon.name;
            const images = pokemon.sprites.front_shiny;
            setName(names);
            setImage(images);
        } catch (error){
            console.error('Error fetching pokemon:', error);
        } finally{
          setLoading(false);
        }
    };
    //referenced ai for this line
    useEffect(() => {
        generateImage();
    }, []);
    return(
        <div>
        <h1>Your Pokemon is!</h1>
        <div>
            <h2 className="font-pokemon">{name}</h2>
            <Image
            src={image}
            alt={name}
            width={100}
            height={100}
            ></Image>
        </div>
        </div>
    );

}