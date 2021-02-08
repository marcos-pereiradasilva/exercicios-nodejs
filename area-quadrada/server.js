const express = require('express');
const areaQuadrada = require("./areaQuadrada.js");

const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})

//
// http://localhost:3000/area-quadrada?lado1=2&lado2=5
//
app.get('/area-quadrada?', (req, res) => {
    res.send({
        resultado: areaQuadrada.areaQuadrada(req.query.lado1, req.query.lado2)
    });
})