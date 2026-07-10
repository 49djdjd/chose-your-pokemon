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
            const images = pokemon.sprites.front_default;
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
        <div className="flex flex-col text-center items-center min-h-screen justify-center bg-cyan-50">
        <h1 className="pt-20 font-pokemon text-black text-8xl">Your Pokemon is:</h1>
        <div className="pt-10 items-center flex-col flex ">
            <h2 className="pt-20 font-pokemon text-black text-7xl">{name}!</h2>
            <img
            className="w-150 -mt-8 h-150 items-center hover:animate-bounce"
            src={image}
            alt={name}
            />
        </div>
        <a
            className="items-center justify-center w-10 flex h-12 gap-3 rounded-full px-15 text-background bg-sky-200 hover:bg-sky-100"
            href="/"
        >
        back!
        </a>
        </div>
    );

}