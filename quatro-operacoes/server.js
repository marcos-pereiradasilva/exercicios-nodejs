const express = require('express');
const operacoes = require('./app.js');

const app = express();
const port = 3000

//
// http://localhost:3000/somar?a=10&b=2
//
app.get('/somar?', (req, res) => {

    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);

    res.send({
        resultado: operacoes.adicionar(a, b)
    });
})

//
// 
//
app.get('/subtrair?', (req, res) => {
    res.send({
        resultado: operacoes.subtrair(parseInt(req.query.a), parseInt(req.query.b))
    });
})

//
//
//
app.get('/multiplicar?', (req, res) => {
    res.send({
        resultado: operacoes.multiplicar(parseInt(req.query.a), parseInt(req.query.b))
    });
})

//
//
//
app.get('/dividir?', (req, res) => {
    res.send({
        resultado: operacoes.dividir(parseInt(req.query.a), parseInt(req.query.b))
    });
})

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})
