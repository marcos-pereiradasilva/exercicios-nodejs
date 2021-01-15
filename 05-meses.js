//
//  Considerando que todos os meses tenham 30 dias, calcular o total de dias de n meses.
//

app.get('/dias?', (req, res) => {
    var mes = parseInt(req.query.mes, 10)
    res.send({ quantidadeDias: mes * 30 })
})

const valor1 = parseFloat(process.argv[2], 10)
const valor2 = parseFloat(process.argv[3], 10)
const valor3 = parseFloat(process.argv[4], 10)

function media(valor1, valor2, valor3) {
    var media = (valor1 + valor2 + valor3) / 3
    return (valor1 + valor2 + valor3) / 3
}
console.log(media(80, 40, 40))
