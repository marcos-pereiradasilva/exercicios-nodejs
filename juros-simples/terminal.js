const juros = require('./emprestimo.js')
let capital = parseInt(process.argv[2], 10)
let resultado = undefined

resultado = juros.emprestimo(capital)
console.log(resultado)