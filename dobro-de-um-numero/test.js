const dobro = require('./dobroNumero.js');
let numero = parseInt(process.argv[2], 10);
let resultado = undefined

resultado = dobro.dobroNumero(12);
console.log(resultado == 24);