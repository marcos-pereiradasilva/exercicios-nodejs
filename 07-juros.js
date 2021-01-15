// Faça um programa para calcular o juros simples segundo a fórmula abaixo.
//
// J = C.i.n
// Onde:J = juros,C = capital,i = taxa de empréstimo,n = períodos
//
// Cenário: um empréstimo de R$ 16.000,00 sobre a taxa de 4% durante 4 meses.

app.get('/empr?', (req, res) => {
    let mes = parseInt(req.query.mes, 10)
    let emprest = parseFloat(req.query.emprest, 10)
    res.send({ totalPagar: ((emprest * 0.04) * mes) + emprest })

})

const capital = parseInt(process.argv[2], 10)

function emprestimo(capital) {

    return ((capital * 0.04) * 4) + capital
}
console.log(emprestimo(16000))
