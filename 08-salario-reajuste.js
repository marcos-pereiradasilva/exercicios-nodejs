// Faça um algoritmo que calcule o reajuste de um salário, utilize os seguintes dados:
// salário  = 1.000,00, reajuste = 15%.

app.get('/alt?', (req, res) => {
    var salario = parseInt(req.query.salario, 10)
    res.send({ altSalario: (salario * 0.15) + salario })
})


var salario = parseInt(process.argv[2], 10)

function dissidio(salario) {

    return (salario * 0.15) + salario
}
console.log(dissidio(1000))