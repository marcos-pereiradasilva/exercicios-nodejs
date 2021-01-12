//
// Escreva um algorítmo que calcule a área quadrada
//

app.get('/quad?', (req, res) => {
    let a = parseInt(req.query.a, 10)
    let b = parseInt(req.query.b, 10)
    res.send({ AreaQuadrada: (a * b) })
})

const ldo1 = parseInt(process.argv[2], 10)
const ldo2 = parseInt(process.argv[3], 10)

function areaquad(ldo1, ldo2) {
    return ldo1 * ldo2
}
resultado = areaquad(2, 3)
console.log(resultado)
