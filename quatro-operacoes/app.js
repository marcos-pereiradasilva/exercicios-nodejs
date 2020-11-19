const express = require('express')
const operacoes = require('./app.js')
const app = express();
const port = 3000



app.listen(port,()=>{
    console.log(`servidor rodando na porta ${port}`)
})


// Quatro operações:

    function adicionar (a, b){
        return a + b
    }

    function subtrair (a, b){
        return a - b
    }

    function multiplicar (a, b) {
        return a * b
    }

    function dividir (a, b){
        return a / b
    }
        exports.adicionar = adicionar
        exports.subtrair = subtrair
        exports.multiplicar = multiplicar
        exports.dividir = dividir



