//+page.js works along with +page.svelte. 
//+page.js loads the function first before loading +page.svelte. So here, we are rendering the pokemon via api and passing 
//that data to +page.svelte
export async function load({ params }) {
    const id = params.id;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokeman = await res.json();
    return {
        pokeman
    }
}
