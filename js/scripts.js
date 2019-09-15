var repository = [
    {
        name : "Pikachu",
        height : 0.4,
        types : ["Static", "Lightningrod"]
    } ,
    {
        name : "Nidorina",
        height : 0.8,
        types : ["Poison-point", "Hustle, Rivalry"]
    },
    {
        name : "Arcanine",
        height : 1.9,
        types : ["Flash-fire", "Intimidate", "Justified"]
    }
]

for (i = 0; i < repository.length; i++ ) {
    if (repository[i]["height"] > 1.5)
    document.write('<p>' + ' name: ' + repository[i]['name'] + ' height: ' + repository[i]['height'] + "wow that's big" + '</p>');
    else
    document.write('<p>' + ' name: ' + repository[i]['name'] + ' height: ' + repository[i]['height'] + '</p>');
}
