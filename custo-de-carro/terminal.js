const carroNovo = require('./custoCarroNovo.js');
let custoFabr = parseInt(process.argv[2], 10);
let resultado = undefined

resultado = carroNovo.carroNovo(custoFabr);
console.log(resultado);