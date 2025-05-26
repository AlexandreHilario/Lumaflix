const botaoWhatapp = document.createElement("button");
        botaoWhatapp.innerText = "Ir para Whatsapp";
        botaoWhatapp.style.marintop = "20px";
        botaoWhatapp.style.padding = "15px";
        botaoWhatapp.style.fontSize = "16px";
        botaoWhatapp.onclick = function() {
            let numero = prompt("Digite seu número com DDD (EX: 81 912345678:" );
            if (numero) {
                numero = numero.replace(/\D/g, '');
                window.open("https://wa.me/55" + numero, "_blank");
            } else {
                alert("Você não digitou um número existente, por favor, tente novamente.");      
            }
        };

        document.body.appendChild(botaoWhatapp);