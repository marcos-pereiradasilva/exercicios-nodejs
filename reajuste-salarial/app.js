// Calcula o reajuste de um salárial 15%.


function reajustar(salario) {

    return (salario * 0.15) + salario;
}
//console.log(reajustar(1000));
module.exports.reajustar = reajustar;