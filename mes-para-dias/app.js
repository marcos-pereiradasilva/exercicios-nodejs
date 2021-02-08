//
//  Transforma dias em meses 
//
let dias = parseInt(process.argv[2], 10)


function diasParaMeses(dias) {
    return dias / 30
}
//console.log(diasParaMeses(366))

module.exports.diasParaMeses = diasParaMeses