const areaQuadrada = require("./areaQuadrada.js");

const lado1 = parseInt(process.argv[2], 10)
const lado2 = parseInt(process.argv[3], 10)

resultado = areaQuadrada.areaQuadrada(lado1, lado2);

console.log(resultado);