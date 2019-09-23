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

    function addListItem(pokemon) {
        var $ulItem = document.querySelector(".pokemon-list");
        var $listItem = document.createElement('li');
        var $button = document.createElement('button');

        $button.innerText = pokemon.name;
        $button.classList.add('pokemon-button');
        $listItem.appendChild($button);
        $ulItem.appendChild($listItem);
        addEventListenerButton($button, pokemon);
    }

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    function addEventListenerButton(button, pokemon) {
        button.addEventListener('click', function(event) {
            showDetails(pokemon);
        });
    };

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});
