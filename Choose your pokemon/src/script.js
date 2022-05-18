let url = "https://pokeapi.co/api/v2/pokemon/"
let num = Math.floor(Math.random() * 100) + 1;

fetch(url+num)
    .then(function (response) {
        return response.json();
    }) 
    .then(function (data) {
        console.log(data);
        console.log("This name "+ data.species.name);
        console.log("This data"+ data.sprites);
        pokemonShufflePic(data);
        pokemonPic(data);
        pokemonData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    }) 


function pokemonData(data) {
    var nameContainer = document.getElementById("pokemon-name");
    var weightContainer = document.getElementById("pokemon-weight");
    var heightContainer = document.getElementById("pokemon-height");
    var pokemon_id = data.id
    var pokemon_weight = data.weight
    var pokemon_height = data.height
    var pokemon_name = data.species.name[0].toUpperCase() + data.species.name.substring(1);

    nameContainer.innerHTML = `${pokemon_name} #${pokemon_id}`;
    weightContainer.innerHTML = `Weight: ${pokemon_weight}`;
    heightContainer.innerHTML = `Height: ${pokemon_height}`;
}

function pokemonPic(data) {
    var picContainerLeft = document.getElementById("pic_left");
    var picContainerRight = document.getElementById("pic_right");
    var picPokemon = data.sprites;

    var topLeft = document.createElement("img")
    var bottomLeft = document.createElement("img")
    var topRight = document.createElement("img")
    var bottomRight = document.createElement("img")

    topLeft.setAttribute("src", picPokemon.front_default);
    bottomLeft.setAttribute("src", picPokemon.back_default)
    topRight.setAttribute("src", picPokemon.front_shiny)
    bottomRight.setAttribute("src", picPokemon.back_shiny)

    topLeft.setAttribute("class","all_pokemon");
    bottomLeft.setAttribute("class","all_pokemon");
    topRight.setAttribute("class","all_pokemon");
    bottomRight.setAttribute("class","all_pokemon");

    picContainerLeft.appendChild(topLeft);
    picContainerLeft.appendChild(bottomLeft);
    picContainerRight.appendChild(topRight);
    picContainerRight.appendChild(bottomRight);
}

function pokemonShufflePic(data) {
    var mainContainer = document.getElementById("pic_main");
    var picpokemon = data.sprites;
    var shuffleArray = [];
    var count = 0;

    var mainPicPokemon = document.createElement("img");

    mainPicPokemon.setAttribute("src", picpokemon.front_default);
    mainPicPokemon.setAttribute("class","all_pokemon");
    mainContainer.appendChild(mainPicPokemon);

    shuffleArray.push(picpokemon.front_default);
    shuffleArray.push(picpokemon.back_default);
    shuffleArray.push(picpokemon.front_shiny);
    shuffleArray.push(picpokemon.back_shiny);

    setInterval(function() {
        mainPicPokemon.setAttribute("src",shuffleArray[count]);
        count++;
        if (count == 4) {
            count = 0
        }
    }, 2000);

}