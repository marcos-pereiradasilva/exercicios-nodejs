const dobro = require("./app");

// pegando o que vem do terminal
let numeroStr = process.argv[2];

// convertendo para inteiro
let numero = parseInt(numeroStr, 10);

// executando nossa função
const resultado = dobro(numero);

console.log("O dobro de " + numero +" é " + resultado);