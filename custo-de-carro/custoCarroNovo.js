// Considerando os valores abaixo, faça uma aplicação que calcule o custo de fabricação.
//
//  Custo de fábrica = 10.000,00 Percentual do distribuidor = 28% Percentual dos Impostos  = 45% e preço final...
//

function carroNovo(custoFabr) {

    return (custoFabr * 0.28) + (custoFabr * 0.45) + custoFabr
}
//console.log(newCar(10000));
module.exports.carroNovo = carroNovo