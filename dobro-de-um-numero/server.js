const express = require('express');
const dobro = require("./app");

const app = express();
const port = 3000;

//
// http://localhost:3000/dobro?num=4
//
app.get('/dobro?', (req, res) => {
    res.send({
        dobro: dobro(req.query.num)
    });
})

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})
