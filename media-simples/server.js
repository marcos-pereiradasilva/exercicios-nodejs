const express = require('express');
const average = require('./mediaSimples.js');
const app = express();
let port = 3000;

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})


app.get('/media?', (req, res) => {

    res.send({
        Media: average.mediaSimples(req.query.valor1, req.query.valor2, req.query.valor3)
    });
});