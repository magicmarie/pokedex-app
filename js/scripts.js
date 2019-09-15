var repository = [
    {
        name : "Pikachu",
        height : "0.4m",
        types : ["Static", "Lightningrod"]
    } ,
    {
        name : "Nidorina",
        height : "0.8m",
        types : ["Poison-point", "Hustle, Rivalry"]
    },
    {
        name : "Arcanine",
        height : "1.9m",
        types : ["Flash-fire", "Intimidate", "Justified"]
    }
]

for (i = 0; i < repository.length; i++ ) {
    document.write('name:' + repository[i]['name'] + ' height: ' + repository[i]['height']);
}
