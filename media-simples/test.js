const media = require('./mediaSimples.js')

let resultado = parseFloat(process.argv[2], 10)
resultado = media.mediaSimples(10, 9, 8)
console.log(resultado >= 6)