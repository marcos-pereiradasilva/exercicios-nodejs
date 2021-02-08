const express = require('express')
const antecessor = require('./antsuce.js')
const app = express()
const port = 3000
app.listen(port, () => {
    console.log('Servidor rodando na porta 3000')
})

app.get('/antsuc?', (req, res) => {
    res.send({
        resultado: antecessor.antsuce(req.query.num1)
    })
})