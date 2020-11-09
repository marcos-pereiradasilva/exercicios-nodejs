const express = require('express');
const quadrado = require('./app.js')
const app = express();
const port = 3000


app.listen(port,()=>{console.log(`servidor rodando na porta ${port}`)
})


    // Tentando fazer app dos exercícios de lógica.

//01 - Crie um programa para calcular o dobro de um número.

    app.get('/dobro?', (req, res)=>{

        res.send(req.query.num * 2 + ' : É do dobro número digitado.')
    })
   // --------------------------------------------------------------------
//02 Escreva um algorítmo que calcule a área quadrada.

    app.get('/quad?',(req, res)=>{
            let a = parseInt(req.query.a, 10)
            let b = parseInt(req.query.b, 10)
            res.send({AreaQuadrada:(a * b)})
    })
  //----------------------------------------------------------------------// 03 Escreva um algorítimo que mostre o sucessor e o antecessor de um número qualquer.      


  //--------------------------------------------------------------------
  //04 - Faça um programa que calcule a média simples (aritmética) de 3 valores quaisquer.

        app.get('/media?',(req, res)=>{
            let valor1 = parseFloat(req.query.valor1, 10)
            let valor2 = parseFloat(req.query.valor2, 20)
            let valor3 = parseFloat(req.query.valor3, 10)

            res.send({Media: (valor1+valor2+valor3)/3})
    })
//----------------------------------------------------------------------
//05 - Considerando que todos os meses tenham 30 dias, calcular o total de dias de n meses.

         app.get('/dias?', (req,res)=>{
             var mes = parseInt(req.query.mes, 10)
             res.send({quantidadeDias: mes * 30})
         })

//------------------------------------------------------------------------
//06 - O custo de um carro novo ao consumidor é obtido com a seguinte fórmula: custo final = custo de fábrica + (custo de fábrica * percentual do distribuidor) +(custo de fábrica * percentual de impostos) Considerando os valores abaixo, faça um programa para calcular o custo de fabricação. Custo de fábrica = 10.000,00 Percentual do distribuidor = 28% Percentual dos Impostos  = 45%.

            app.get('/carNew?', (req, res)=>{

                let custoFabr = parseInt(req.query.custoFabr, 10)
                
                res.send({custoFinal: (custoFabr*0.28)+(custoFabr*0.45)+ custoFabr})
            })
//----------------------------------------------------------------------
//07 - Faça um programa para calcular o juros simples segundo a fórmula abaixo. J = C.i.n
//Onde:J = juros,C = capital,i = taxa de empréstimo,n = períodos
//Vamos imaginar o seguinte cenário: um empréstimo de R$ 16.000,00 sobre a taxa de 4% durante 4 meses.

            app.get('/empr?',(req, res)=>{
                let mes = parseInt(req.query.mes, 10)
                let emprest = parseFloat(req.query.emprest, 10)
                res.send({totalPagar: ((emprest*0.04)*mes)+emprest})

            })
//----------------------------------------------------------------------
// 08 - Faça um algoritmo que calcule o reajuste de um salário, utilize os seguintes dados:salário  = 1.000,00, reajuste = 15%.

            app.get('/alt?',(req, res )=>{
                var salario = parseInt(req.query.salario, 10)                
                res.send({altSalario: (salario*0.15)+salario })
            })
            //--------------------------------------------------------------