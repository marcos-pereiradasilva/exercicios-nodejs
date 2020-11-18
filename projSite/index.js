//var area = Document.getElementById('area')
 //   function clicar(){
   //     area.innerText='clicou!'
     //   area.style.background='red'
  //  }

    //function entrar (){
      //  area.innerText='entrou'
   // }

    //function sair (){
      //  area.innerText='sair'
        //area.style.background='green'
   // }

        function somar(){
          const n1=document.querySelector(".n1").value
          const n2=document.querySelector(".n2").value
          const res=parseInt(n1) + parseInt(n2)
          document.querySelector(".Resultado1").innerHTML= `Resultado: ${res}`
      }
      
      function subtrai(){
        const n3=document.querySelector(".n3").value
        const n4=document.querySelector(".n4").value
        const res=parseInt(n3) - parseInt(n4)
        document.querySelector(".Resultado2").innerHTML= `Resultado: ${res}`
    }
             function multiplicar() {
              const n5=document.querySelector(".n5").value
              const n6=document.querySelector(".n6").value
              const res = parseInt(n5) * parseInt(n6)
             document.querySelector(".Resultado3").innerHTML=`Resultado: ${res}`
      }

      
            function dividir (){
            const n7 = document.querySelector('.n7').value
            const n8 = document.querySelector('.n8').value
            const res = parseInt(n7) / parseInt(n8)
            document.querySelector(".Resultado4").innerHTML=`Resultado: ${res}`
      } 
      
  
    
  
   