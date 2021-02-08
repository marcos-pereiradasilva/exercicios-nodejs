const media = require('./mediaSimples.js')

let valor1 = parseFloat(process.argv[2], 10)
let valor2 = parseFloat(process.argv[3], 10)
let valor3 = parseFloat(process.argv[4], 10)

let resultado = undefined

resultado = media.mediaSimples(valor1, valor2, valor3)
console.log(resultado)