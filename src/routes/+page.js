export async function load({ params }) {
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
    return {
        pokemon:loadedPokemon  //load and save data to pokemon
    }
}
