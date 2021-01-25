const reajuste = require('./app.js');

let resultado = parseInt(process.argv[2], 10);

resultado = reajuste.reajustar(1000)
console.log(resultado == 1150)