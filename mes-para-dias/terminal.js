const transforma = require('./app.js')
let dias = parseInt(process.argv[2], 10)
let resultado = undefined

resultado = transforma.diasParaMeses(dias)
console.log(resultado)