var pokemonRepository = (function () {

var repository = [
    {
        name : "Pikachu",
        height : 0.4,
        types : ["Static", "Lightningrod"]
    } ,
    {
        name : "Nidorina",
        height : 0.8,
        types : ["Poison-point", "Hustle", "Rivalry"]
    },
    {
        name : "Arcanine",
        height : 1.9,
        types : ["Flash-fire", "Intimidate", "Justified"]
    }
];

    function add(pokemon) {
        repository.push(pokemon);
    }

    function getAll() {
        return repository;
    }

    return {
        add: add,
        getAll: getAll
    };
})()

pokemonRepository.getAll().forEach(function(pokemon) {
    var $ulItem = document.querySelector(".pokemon-list");
    var $listItem = document.createElement('li');
    var $button = document.createElement('button');

    $button.innerText = pokemon.name;
    $button.classList.add('pokemon-button');

    $listItem.appendChild($button);
    $ulItem.appendChild($listItem);
});
