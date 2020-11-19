


//01 - Crie um programa para calcular o dobro de um número.

    const b = parseFloat('2')
    const c = parseInt(process.argv[2], 10)

    function dobro (b, c){
        return b * c
    }
        console.log(b * 100)
//-------------------------------------------------
//02 - Escreva um algorítmo que calcule a área quadrada.

    const ldo1 = parseInt (process.argv[2], 10)
    const ldo2 = parseInt (process.argv[3], 10)

        function areaquad (ldo1, ldo2){
            return ldo1 * ldo2
    }
            resultado = areaquad(2, 3)
                console.log(resultado)
//---------------------------------------------------------------
// 03 - Escreva um algorítimo que mostre o sucessor e o antecessor de um número qualquer.
   var num1 = parseInt(process.argv [2], 10)
     
    function antsuce (num1){
        num1-1
         return num1-1    
    } 

        console.log(antsuce(10))
 //------------------------------------------------------------      
//04 - Faça um programa que calcule a média simples (aritmética) de 3 valores quaisquer.

    const valor1 = parseFloat(process.argv[2], 10)
    const valor2 = parseFloat(process.argv[3], 10)
    const valor3 = parseFloat(process.argv[4], 10)

    function media (valor1,valor2,valor3){
     var media =  (valor1 + valor2 + valor3)/3
     return (valor1+valor2+valor3)/3
}
        console.log(media(80,40,40))
//--------------------------------------------------------------
       
//05 - Considerando que todos os meses tenham 30 dias, calcular o total de dias de n meses.

const mes = parseInt(process.argv[2], 10)

function dias (mes){
  //   30 * mes
    return 30 * mes
}
    console.log(dias(4))
    //---------------------------------------------------------

//06 - O custo de um carro novo ao consumidor é obtido com a seguinte fórmula: custo final = custo de fábrica + (custo de fábrica * percentual do distribuidor) +(custo de fábrica * percentual de impostos) Considerando os valores abaixo, faça um programa para calcular o custo de fabricação. Custo de fábrica = 10.000,00 Percentual do distribuidor = 28% Percentual dos Impostos  = 45%.

//let custoFinal = parseInt(process.argv [3], 10)
let custoFabr = parseInt(process.argv[4], 10)
//let imposto = parseInt(process.argv [5], 10)

function carroZero(custoFabr){

    return (custoFabr*0.28) + (custoFabr*0.45) + custoFabr    
}    
    console.log(carroZero (20000))
  
//-----------------------------------------------------------------------
//07 - Faça um programa para calcular o juros simples segundo a fórmula abaixo. J = C.i.n
//Onde:J = juros,C = capital,i = taxa de empréstimo,n = períodos
//Vamos imaginar o seguinte cenário: um empréstimo de R$ 16.000,00 sobre a taxa de 4% durante 4 meses.

const capital = parseInt(process.argv[2], 10)

    function emprestimo (capital){
       
        return ((capital*0.04)*4)+capital
    }
        console.log (emprestimo(16000))
//-----------------------------------------------------------------------
// 08 - Faça um algoritmo que calcule o reajuste de um salário, utilize os seguintes dados:salário  = 1.000,00, reajuste = 15%.

var salario = parseInt (process.argv[2], 10)

    function dissidio (salario){

        return (salario * 0.15) + salario
    }
        console.log(dissidio(1000))
//-----------------------------------------------------------------------