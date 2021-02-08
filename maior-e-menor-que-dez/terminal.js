// import
const maiorMenor = require('./maiorMenor.js');

let num = parseInt(process.argv[2], 10);
resultado = undefined;

resultado = maiorMenor.heMaiorQueDez(num)
console.log(resultado)