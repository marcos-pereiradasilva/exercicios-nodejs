const express = require('express')
const app = express()
const transforma = require('./app.js')
const port = 3000
app.listen(port, () => {
    console.log('Servidor rodando na porta 3000')
})

app.get('/meses?', (req, res) => {
    res.send({
        resultado: transforma.diasParaMeses(req.query.dias)
    })
})