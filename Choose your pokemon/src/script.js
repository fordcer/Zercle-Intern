let url = "https://pokeapi.co/api/v2/pokemon/1"

fetch(url)
    .then(function (response) {
        return response.json();
    }) 
    .then(function (data) {
        console.log(data);
        console.log("This name "+ data.species.name);
        console.log("This data"+ data.length);
        pokemonData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    }) 


function pokemonData(data) {
    var mainContainer = document.getElementById("pokemon");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        // div.innerHTML = `Name : ${data.species.name}`;
        div.innerHTML = "Name : " + data.species.name;
        mainContainer.appendChild(div); 
    }
}