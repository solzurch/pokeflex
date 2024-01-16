// height in m, weight in kg

let pokemonRepository = (function () {
    let repository = [
        {
            name: 'Bulbasaur',
            height: '0.7',
            types: ['grass', 'poison'],
            weight: '6.9'
        },
        {
            name: 'Charmaleon',
            height: '1.1',
            types: ['fire'],
            weight: '19'
        },
        {
            name: 'Blastoise',
            height: '1.6',
            types: ['water'],
            weight: '85.5'
        },
        {
            name: 'Weedle',
            height: '0.3',
            types: ['bug', 'poison'],
            weight: '3.2'
        }
    ];
    function add(pokemon) {
        if (
            typeof pokemon === 'object' &&
            'name' in pokemon &&
            'height' in pokemon &&
            'types' in pokemon &&
            'weight' in pokemon
        ) {
            repository.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }
    }
    function getAll() {
        return repository;
    }
        // add <li> to <ul> and <button> with innerText 

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listpokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();

pokemonRepository.add({ name: 'Pikachu', height: '0.4', types: ['electric'], weight: '6'});

console.log(pokemonRepository.getAll());

    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
