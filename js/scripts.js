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
]

repository.forEach(function(pokeman) {
    Object.keys(pokeman).forEach(function(item) {
    document.write('<p><b>' + item + '</b>: ' + pokeman[item] + '</p>');
    });
});
