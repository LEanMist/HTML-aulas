const resposta = document.querySelector("#app");
function alterarColor(){
    resposta.classList.toggle('corAzul');
    resposta.classList.toggle('corVermelha');
}

resposta.addEventListener("click", alterarColor);