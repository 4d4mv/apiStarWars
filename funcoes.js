

fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(data => {
        var personagens = document.querySelector("#personagens");

        console.log(data.results)

        /* personagens.innerHTML = data.map(function (personagem) {
            return "<div>" + personagem.name + "</div>";
        }); */
    });

function minhaFuncao(mensagem){
    console.log(mensagem);
}

function soma(a, b){
    console.log("O resultado de: " + a + " + " + b + " é: ");
    console.log(a+b);  
}
