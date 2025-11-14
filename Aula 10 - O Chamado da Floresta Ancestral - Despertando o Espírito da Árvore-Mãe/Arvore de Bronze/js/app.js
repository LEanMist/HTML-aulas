document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('somAmbiente');
  const btn = document.getElementById('botãodaMusiquinha');
  if (!audio || !btn) return console.error('Elemento não encontrado: #somAmbiente ou #botãodaMusiquinha');

  audio.loop = true;
  audio.volume = 0.5;
  audio.muted = true; 

  audio.play().catch(() => {
  });

  btn.addEventListener('click', async () => {
    try {
      if (audio.muted) {
        audio.muted = false;
        await audio.play();
        btn.textContent = 'Silenciar';
        btn.setAttribute('aria-pressed', 'true');
      } else {
        audio.muted = true;
        btn.textContent = 'Ativar som';
        btn.setAttribute('aria-pressed', 'false');
      }
    } catch (err) {
      console.error('Erro ao alternar som:', err);
    }
  });
});