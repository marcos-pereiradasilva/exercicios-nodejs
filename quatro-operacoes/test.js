//
//  TODO: escrever as asserções
//

const operacoes = require('./app.js');

let resultado = undefined

// exemplo
resultado = operacoes.adicionar(50, 10)
console.log(resultado == 60)

resultado = operacoes.subtrair(140, 70)
msg = 'O resultado de 140 - 70 = ' + resultado
console.log(msg)

resultado = operacoes.multiplicar(9, 9)
msg = 'O resultado de 9 X 9 é = ' + resultado
console.log(msg)

resultado = operacoes.dividir(750, 2)
msg = 'O resultado de 750 / 2 é = ' + resultado
console.log(msg)

