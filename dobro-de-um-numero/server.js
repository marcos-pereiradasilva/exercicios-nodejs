const express = require('express');
const dobro = require("./dobroNumero");

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})

app.get('/dobro?', (req, res) => {
    res.send({
        dobro: dobro.dobroNumero(req.query.num)
    });
});