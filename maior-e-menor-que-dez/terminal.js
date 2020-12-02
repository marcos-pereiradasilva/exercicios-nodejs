// import
const app = require('./app.js');

// entrada do usuário
const num = parseInt(process.argv[2], 10);

// processamento
let resultado = app.heMaiorQueDez(num);

if (resultado) {
    console.log("O seu número é maior que 10");
} else {
    console.log("O seu número é menor que 10");
}
