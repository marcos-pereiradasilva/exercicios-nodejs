const express = require('express');
const service = require("./app");

const app = express();
const port = 3000

//
// http://localhost:3000/he-maior-que-dez?num=12
//
app.get('/he-maior-que-dez?', (req, res) => {
    res.send({
        result: service.heMaiorQueDez(req.query.num)
    });
})

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})
