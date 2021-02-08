const express = require('express');
const carroNovo = require('./custoCarroNovo.js');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log('Servidor rodando na porta 3000')
});


app.get('/newCar?', (req, res) => {

    let custoFabr = parseInt(req.query.custoFabr, 10)

    res.send({
        custoFinal: carroNovo.carroNovo(custoFabr)
    })
});