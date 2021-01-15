const areaQuadrada = require("./app");

const lado1 = parseInt(process.argv[2], 10)
const lado2 = parseInt(process.argv[3], 10)

resultado = areaQuadrada(lado1, lado2);

console.log(resultado);
