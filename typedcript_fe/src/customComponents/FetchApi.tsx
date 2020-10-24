import React from "react";
import {useState,useEffect} from "react";
import { async } from "q";

let POKEMON_API = "https://pokeapi.co/api/v2/pokemon/"

interface PokemonType {
    name: string;
}
interface PokemonData{
    [index:number]: {name:string,url:string};
    monster:{name:string, url:string}
}

export const FetchApi: React.FunctionComponent = () => {

    const[pokemonList,setPokemonList] = useState({})
     
    useEffect(()=>{
        async function getData(){
            const getResponse =  await fetch(`${POKEMON_API}`)
            const pokemon = await getResponse.json();
            return console.log("pokemon")
            //setPokemonList(pokemon)
        }
    },[])
    async function text(){
        const getResponse =  await fetch(`${POKEMON_API}`)
        const pokemonList = await getResponse.json()
        // const pokemonInfo = pokemonList.results.map((monster:PokemonData.monster,index:number)=>{
        //     let monsterInfo:string = monster.url;
        //     return monsterInfo
        // })
        // return console.log(pokemonInfo);



   //     [ts] Cannot access 'PokemonData.monster' because 'PokemonData' is a type, but not a namespace. Did you mean to retrieve the type of the property 'monster' in 'PokemonData' with 'PokemonData["monster"]'? [2713]
    //https://medium.com/jspoint/typescript-interfaces-4a2af07c8070
}

    return(
        <div>
            <button onClick={text}>WORKING</button>
        </div>
    )
}