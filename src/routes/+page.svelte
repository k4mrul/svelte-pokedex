<script>
    import PokemanCard from "../components/pokemanCard.svelte";

    export let data;

    let searchTerm = "";
    let filteredPokemon = [];

    $: { //reactivity, if binding in input field change, svelte should pick the changes as well so that we can do
        //whatever we want from that input value
        if (searchTerm) {
            filteredPokemon = data.pokemon.filter(pokapokaman => pokapokaman.name.toLowerCase().includes(searchTerm.toLowerCase())); 
        }else {
            filteredPokemon = [...data.pokemon] 
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

