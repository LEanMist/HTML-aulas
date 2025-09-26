import { Pessoa } from "./classe/Pessoa.js";
//adicionar caixa de texto
let caixa = document.getElementById("forma");
let txtN = ``;
for (let i=0;i<1;i++) {
    txtN +=`
        <label for="txtN${i}">Nome ${i + 1}</label>
        <input type="text" id="txtN${i}" placeholder="Caixa ${i+1}">
  `;
}
let res = document.getElementById("r");
let r2 = document.getElementById("r2");
let label = ``;
let botao = document.getElementById('btnInserir');
botao.addEventListener('click', ()=>{
  let valor = document.getElementById('txtN0').value;
  let pessoal = new Pessoa (valor);
  res.innerHTML = pessoal.exibirNome();
  r2.textContent=nome;
});
caixa.innerHTML = txtN;
caixa.style.display = "flex";
caixa.style.flexFlow = "column wrap";
caixa.style.alignContent = "center";
caixa.style.gap = "3px";// Adiciona um espaçamento entre 

//let res = document.getElementById("r");
//let nome = "Leandro";
//res.innerHTML = `Ola ${nome}`
//const res1 = document.getElementById("r1");
//const nome1="Fernando";
//res1.innerHTML=`Hello Mr${nome1}`;
