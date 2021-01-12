//
// Quatro operações:
//

function adicionar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b) {
    return a / b
}

exports.adicionar = adicionar
exports.subtrair = subtrair
exports.multiplicar = multiplicar
exports.dividir = dividir

// module.exports = { adicionar, subtrair, multiplicar, dividir }