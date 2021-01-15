// O custo de um carro novo ao consumidor é obtido com a seguinte fórmula: 
//   custo final = 
//     custo de fábrica + 
//     (custo de fábrica * percentual do distribuidor) + 
//     (custo de fábrica * percentual de impostos)

// Considerando os valores abaixo, faça um programa para calcular o custo de fabricação.
//
//  Custo de fábrica = 10.000,00 Percentual do distribuidor = 28% Percentual dos Impostos  = 45%.
//

app.get('/carNew?', (req, res) => {

    let custoFabr = parseInt(req.query.custoFabr, 10)

    res.send({ custoFinal: (custoFabr * 0.28) + (custoFabr * 0.45) + custoFabr })
})

//let custoFinal = parseInt(process.argv [3], 10)
let custoFabr = parseInt(process.argv[4], 10)
//let imposto = parseInt(process.argv [5], 10)

function carroZero(custoFabr) {

    return (custoFabr * 0.28) + (custoFabr * 0.45) + custoFabr
}
console.log(carroZero(20000))

