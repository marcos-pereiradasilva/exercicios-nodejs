//
// Faça um programa que calcule a média simples (aritmética) de 3 valores quaisquer.
//

app.get('/media?', (req, res) => {
    let valor1 = parseFloat(req.query.valor1, 10)
    let valor2 = parseFloat(req.query.valor2, 20)
    let valor3 = parseFloat(req.query.valor3, 10)

    res.send({ Media: (valor1 + valor2 + valor3) / 3 })
})

const valor1 = parseFloat(process.argv[2], 10)
const valor2 = parseFloat(process.argv[3], 10)
const valor3 = parseFloat(process.argv[4], 10)

function media(valor1, valor2, valor3) {
    var media = (valor1 + valor2 + valor3) / 3
    return (valor1 + valor2 + valor3) / 3
}
console.log(media(80, 40, 40))

