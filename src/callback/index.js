function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calc(2, 2, sum))


//Ejemplo 2

setTimeout(() => {
    console.log('Hola JavaScripts')
}, 2000);


//Ejemplo 3

function saludo(nombre) {
    console.log(`Hola ${nombre}`);
}

setTimeout(saludo, 2000, 'Brian');