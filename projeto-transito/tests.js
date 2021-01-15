const verificarVelocidade = require("./app");

console.log(verificarVelocidade(70) == true);
console.log(verificarVelocidade(68) == true);
console.log(verificarVelocidade(67) == false);
