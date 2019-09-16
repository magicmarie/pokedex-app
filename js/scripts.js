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
    Object.keys(pokemon).forEach(function(item) {
    document.write('<p><b>' + item + '</b>: ' + pokemon[item] + '</p>');
    });
});
