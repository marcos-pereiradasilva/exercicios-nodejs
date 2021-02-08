const juros = require('./emprestimo.js')
let resultado = parseInt(process.argv[2], 10)

resultado = juros.emprestimo(16000)
console.log(resultado == 18560)