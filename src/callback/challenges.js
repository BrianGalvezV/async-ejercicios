const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://pokeapi.co/api/v2';

function fetchData(urlAPI, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', urlAPI, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error' + urlAPI);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(`${API}/pokemon/`, function (error1, data1) {
    if (error1) return console.error(error1);
    console.log(data1.results[2])
})