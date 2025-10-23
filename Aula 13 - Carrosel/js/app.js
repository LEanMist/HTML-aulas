//1. Selecionar os elementos HTML
const prevBtn = document.getElementById('retrocesso');
const nextBtn = document.getElementById('acesso');
const carrosselContent = document.getElementById("carrossel-content")

//2. definir classes de cores a serem usados
const colorClasses=['bg-aqua','bg-blue','bg-red'];

//3. Criar um contador para saber qual e a cor atual
let currentIndex= 0; //nosso contador de indices da nossa lista de cores

//4. função para atualizar o carrossel
function updateCarrossel(){
    //remover TODAS as classes de cor para que uma seja aplicada separadamente
    carrosselContent.classList.remove(...colorClasses);
    //... Spreaad sintax operador de Propagação/espelhamento
    //o que faz: espalha ou descompacta os items de um array em objetos
    //individais.
    //classList.remove -> pode aceitar varias argumentos, onde cada argumento
    //e uma string de classe que voce quer removerd

    //adicionar a classe de cor correta baseada no currentIndex
    carrosselContent.classList.add(colorClasses[currentIndex]);
}

//5. adicionar funções para os botões eventListener
nextBtn.addEventListener('click',()=>{
    currentIndex++;
    //se um indice passar do ultimo item ele volta tudo do começo(0)
    if(currentIndex>= colorClasses.length)
    {
        currentIndex = 0;
    }
    updateCarrossel();
});

prevBtn.addEventListener('click',()=>{
    currentIndex--;
    if(currentIndex<0)
    {
        currentIndex=colorClasses.length-1
    }
    //chamar função para atualizar a cor do carrossel na tela
    updateCarrossel(); 
})
updateCarrossel();