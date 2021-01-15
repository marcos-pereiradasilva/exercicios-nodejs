const express = require('express');
const areaQuadrada = require("./app");

const app = express();
const port = 3000;

//
// http://localhost:3000/area-quadrada?lado1=2&lado2=5
//
app.get('/area-quadrada?', (req, res) => {
    res.send({
        resultado: areaQuadrada(req.query.lado1, req.query.lado2)
    });
})

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})
