const verificarVelocidade = require("./app");
// console.log(verificarVelocidade);

const velocidade = parseInt(process.argv[2], 10);

console.log(verificarVelocidade(velocidade));

