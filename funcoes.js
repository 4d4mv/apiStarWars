

fetch('https://swapi.dev/api/people/')
    .then(response => response.json())

     .then(data => {
       
        document.querySelector("#personagens").innerHTML = data.results.map(personagem => {
            return (
                `   <div>
                        <p>Nome: ${personagem.name}</p>
                        <p>Altura: ${personagem.height}cm</p>
                        <p>Peso: ${personagem.mass}kg</p>
                    </div>
                `    
               );
        })

       
    });

function minhaFuncao(mensagem){
    console.log(mensagem);
}

function soma(a, b){
    console.log("O resultado de: " + a + " + " + b + " é: ");
    console.log(a+b);  
}
function botao(testando){
    console.log(testando);
}
function avaliacao(nota){
    if(nota >= 6){
        console.log("Você está aprovado");
    }else{
        console.log("Você está reprovado");
    }
}