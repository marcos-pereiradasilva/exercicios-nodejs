const antecessor = require('./app.js');

let antsuce = parseInt(process.argv[2], 10);
let resultado = undefined;

resultado = antecessor.antsuce(antsuce)
console.log(resultado)