// height in m, weight in kg

let pokemonList = [
    {
        name: 'Bulbasaur',
        height: '0.7',
        types: ['grass', 'poison'],
        weight: '6.9'
    },

    {
        name: 'Charmaleon',
        height: '1.1',
        types: 'fire',
        weight: '19'
    },

    {
        name: 'Blastoise',
        height: '1.6',
        types: 'water',
        weight: '85.5'
    },

];

for (let i = 0; i < pokemonList.length; i++) {
    let pokemonInfo = pokemonList[i].name + " (height: " + pokemonList[i].height + ")";

    if (pokemonList[i].height > 1.5) {
        pokemonInfo += " -Wow, that's big!!"
    }
    document.write("<p>" + pokemonInfo + "</p>")
}