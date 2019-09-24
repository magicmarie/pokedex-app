var pokemonRepository = (function () {

var repository = [];
var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
        pokemonRepository.loadDetails(pokemon).then( function (){
            console.log(pokemon);
        });
    }

    function addEventListenerButton(button, pokemon) {
        button.addEventListener('click', function(event) {
            showDetails(pokemon);
        });
    };

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                var pokemon = {
                    name: item.name,
                    url: item.url
                };
                add(pokemon);
            })
        }).catch( function (e) {
            console.error(e);
        });
    }

    function loadDetails(item) {
        var url = item.url;
        return fetch(url).then(function (response) {
            return response.json();
        }).then( function (json) {
            item.imageUrl = json.sprites.front_default;
            item.height = json.height;
            item.types = Object.keys(json.types);
        })
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
    };
})();

pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});
