let resposta = document.getElementById('app');
let corAzul = "blue";
let corVermelho = "red";
resposta.addEventListener("click", function e(){
    if(conferencia === true){
        resposta.style.backgroundColor=corVermelho
        conferencia = false; 
    }else{
        resposta.style.backgroundColor=corAzul
        conferencia = true;
    }
});