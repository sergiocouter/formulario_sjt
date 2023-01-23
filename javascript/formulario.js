var formulario = document.querySelector("#form");
            var nome = document.querySelector("#nome");
            var email = document.querySelector("#email");
            var mediaDosPesos = document.querySelector("#media_dos_pesos");

        document.getElementById("btnSubmit").onclick = function(e) {
            
            var radios1 = document.getElementsByName("Porcentagem_Primeira_Pergunta");

            for (var i = 0; i < radios1.length; i++) {
                if (radios1[i].checked) {
                    console.log(nome.value);
                    console.log(email.value);
                    console.log("Peso Pergunta 1: " + radios1[i].value);
                    var peso1 = radios1[i].value
                    
                }
            }

            var radios2 = document.getElementsByName("Porcentagem_Segunda_Pergunta");

            for (var i = 0; i < radios2.length; i++) {
                if (radios2[i].checked) {
                    console.log("Peso Pergunta 2: " + radios2[i].value);
                    var peso2 = radios2[i].value;

                }
            }

            var radios3 = document.getElementsByName("Porcentagem_Terceira_Pergunta");

            for (var i = 0; i < radios3.length; i++) {
                if (radios3[i].checked) {   
                    console.log("Peso Pergunta 3: " + radios3[i].value);
                    var peso3 = radios3[i].value;

                }
            }

            var radios4 = document.getElementsByName("Porcentagem_Quarta_Pergunta");

            for (var i = 0; i < radios4.length; i++) {
                if (radios4[i].checked) {
                    console.log("Peso Pergunta 4: " + radios4[i].value);
                    var peso4 = radios4[i].value;

                }
            }

            var media = (parseFloat(peso1) + parseFloat(peso2) + parseFloat(peso3) + parseFloat(peso4)) / 4;
               console.log("A media dos pesos é: " + media);
            

            mediaDosPesos.value = media + "%";
            console.log(mediaDosPesos.value);
            
        };