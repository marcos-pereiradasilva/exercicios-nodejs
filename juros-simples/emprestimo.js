// Calcula empréstimo de R$ 16.000,00. Taxa de 4% durante 4 meses.
// J = C.i.n
// J = juros, C = capital, i = taxa de empréstimo, n = períodos.
//

function emprestimo(capital) {
    return ((capital * 0.04) * 4) + capital
}
//console.log(emprestimo(16000))
module.exports.emprestimo = emprestimo