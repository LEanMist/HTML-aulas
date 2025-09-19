const nome = document.getElementById("txtNome");
const botao = document.getElementById("btnExibir");
const r=document.getElementById("resp");

botao.addEventListener("click", function(){
    r.innerHTML = `Olá, ${nome.value}`;
});