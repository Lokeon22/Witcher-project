export default function initModal() {
  const containerModal = document.querySelector('[data-modal="container"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');

  if (containerModal && botaoAbrir && botaoFechar) {
    function abrirModal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
    }

    function fecharModal() {
      abrirModal(event);
    }

    function fecharCliqueFora(event) {
      if (event.target === containerModal) {
        abrirModal(event);
      }
    }

    botaoAbrir.addEventListener("click", abrirModal);
    botaoFechar.addEventListener("click", fecharModal);
    containerModal.addEventListener("click", fecharCliqueFora);
  }
}
