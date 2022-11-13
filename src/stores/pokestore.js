import { writable } from "svelte/store";  //writable used to send data when a component needs it

export const pokemon = writable([])  //defining empty writable

//calling an api and re-arrange the data as we need
const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const res = await fetch(url);
    const data = await res.json();
    const loadedPokemon = data.results.map((data, index) => {
        return {
            name: data.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${
                index+1
            }.png`
        };
    });
    pokemon.set(loadedPokemon);  //setting value to writable
};

fetchPokemon()  //calling function to execute above code (duh!)