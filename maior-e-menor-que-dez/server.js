const express = require('express');
const maiorMenor = require("./maiorMenor.js");

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})


app.get('/he-maior-que-dez?', (req, res) => {
    res.send({
        result: maiorMenor.heMaiorQueDez(req.query.num)
    });
});