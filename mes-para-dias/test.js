const transforma = require('./app.js')

let resultado = parseInt(process.argv[2], 10)

resultado = transforma.diasParaMeses(120)
console.log(resultado == 4, 'true')