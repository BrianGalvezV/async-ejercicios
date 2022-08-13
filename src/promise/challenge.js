import fetch from "node-fetch";

const API = 'https://pokeapi.co/api/v2';

function fetchData(urlAPI) {
    return fetch(urlAPI)
};

/* fetchData(`${API}/pokemon`)
    .then(response => response.json())
    .then(pokemon => {
        console.log(pokemon)
    })
    .catch(error => console.log(error)) */

fetchData(`${API}/pokemon`)
    .then(response => response.json())
    .then(pokemon => {
        console.log(pokemon)
        return fetchData(`${API}/pokemon/${pokemon.results[0].name}`)
    })
    .then(response => response.json())
    .then(pokemon => {
        console.log(pokemon.name)
    })