// height in m, weight in kg

let pokemonRepository = (function () {
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
        {
            name: 'Weedle',
            height: '0.3',
            types: ['bug', 'poison'],
            weight: '3.2'
        },
        {
            name: 'Pikachu',
            height: '0.4',
            types: 'electric',
            weight: '6'
        }
    ];

    return {
        add: function (pokemon) {
            pokemonList.push(pokemon);
        },
        getAll: function () {
            return pokemonList;
        }
    };
})();

// this is old (for loop)
// for (let i = 0; i < pokemonList.length; i++) {
//     let pokemonInfo = pokemonList[i].name + " (height: " + pokemonList[i].height + ")";

pokemonRepository.getAll().forEach(function (pokemon) {
    document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')' + '</p>');

    if (pokemon.height > 1.5) {
        document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')' +
            ' - Wow, that\'s big!; </p>');
    } else {
        document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')' + '</p>');
    }

})
