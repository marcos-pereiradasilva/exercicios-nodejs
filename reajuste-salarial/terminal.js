const reajuste = require('./app.js');

let salario = parseInt(process.argv[2], 10);
let resultado = undefined

resultado = reajuste.reajustar(salario);
console.log(resultado);