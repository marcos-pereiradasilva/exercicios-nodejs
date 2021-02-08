const dobro = require("./dobroNumero.js");
let num = parseInt(process.argv[2], 10);
let resultado = undefined;

resultado = dobro.dobroNumero(num);
console.log(resultado);