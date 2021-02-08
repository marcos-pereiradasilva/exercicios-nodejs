const express = require('express');
const juros = require('./emprestimo.js');
const app = express();
const port = 3000
app.listen(port, () => {
    console.log('Servidor rodando na porta 3000')
});


app.get('/empr?', (req, res) => {
    res.send({
        totalPagar: juros.emprestimo(parseInt(req.query.capital))
    });
});