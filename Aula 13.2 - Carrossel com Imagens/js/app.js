//1. Selecionar os elementos HTML
const prevBtn = document.getElementById('retrocesso');
const nextBtn = document.getElementById('acesso');
const slideImages = document.querySelectorAll('#imagens'); // Alterado para querySelectorAll

//2. definir array de imagens
const images = [
    './public/images/dino.jpg',
    './public/images/lion.jpg',
    './public/images/pasa.jpg'
];

//3. Criar um contador
let currentIndex = 0;

//4. função para atualizar o carrossel
function updateCarrossel() {
    slideImages.forEach((img, index) => {
        if (index === currentIndex) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}
// ...existing code...

//5. adicionar funções para os botões
nextBtn.addEventListener('click', () => {
    currentIndex++;
    if(currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateCarrossel();
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if(currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateCarrossel();
});

// Inicializar o carrossel
updateCarrossel();