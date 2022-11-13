<script>
    import { pokemon } from "../stores/pokestore"; //{} means named export
    //console.log($pokemon); //since the data is writable, in order to get that data, we added $ sign. 
    //$ sign also helps to keep updated with the latest changes (reactivity)
    import PokemanCard from "./components/pokemanCard.svelte";

    let searchTerm = "";
    let filteredPokemon = [];

    $: { //reactivity, if binding in input field change, svelte should pick the changes as well so that we can do
        //whatever we want from that input value
        if (searchTerm) {
            filteredPokemon = $pokemon.filter(pokapokaman => pokapokaman.name.toLowerCase().includes(searchTerm.toLowerCase())); 
            //from each pokapokaman from $pokemon, filter the searchTerm and if keyword includes in searchterm, return/put that into that variable
        }else {
            filteredPokemon = [...$pokemon] //using spread operator to make a copy of pokemon and put it to filteredPokemon variable
        }
    }

</script>

<svelte:head>
    <title>Svelte kit</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppsercase">Svelte Kit Pokedex</h1>

<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" type="text" bind:value={searchTerm} placeholder="Search Pokemon">

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    <!-- {#each $pokemon as pokeman} -->
    {#each filteredPokemon as pokeman}
    <!-- <p>{pokeman.name}</p> -->
    <PokemanCard pokeman={pokeman}/>
    {/each}
</div>

