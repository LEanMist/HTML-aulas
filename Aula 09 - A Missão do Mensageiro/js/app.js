const nomeUsuario = document.getElementById('userInput');
const botaoAcao = document.getElementById('actionButton');
const divResposta = document.getElementById('resposta');
botaoAcao.addEventListener('click', function() {
    divResposta.innerHTML = `Saudações ${nomeUsuario.value}, Sua missão é desvendar os mistérios seta floresta 🌟🧙‍♂️ `
});