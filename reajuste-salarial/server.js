const express = require('express');
const reajuste = require('./app.js');
const app = express()
const port = 3000
app.listen(port, () => {
    console.log('Servidor rodando na porta 3000')
})


app.get('/alt?', (req, res) => {
    res.send({
        ReajusteSalarial: reajuste.reajustar(parseInt(req.query.salario))
    })
})