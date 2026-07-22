document.addEventListener('DOMContentLoaded', () => {
  const contenedoresImagenes = document.querySelectorAll('.sala_card_imagenes');

  contenedoresImagenes.forEach((contenedor) => {
    const imgPrincipal = contenedor.querySelector('.img_principal');
    const miniaturas = contenedor.querySelectorAll('.img_miniaturas img');

    miniaturas.forEach((miniatura) => {
      miniatura.style.cursor = 'pointer';

      miniatura.addEventListener('click', () => {

        const srcTemporal = imgPrincipal.src;
        const altTemporal = imgPrincipal.alt;

        imgPrincipal.src = miniatura.src;
        imgPrincipal.alt = miniatura.alt;

        miniatura.src = srcTemporal;
        miniatura.alt = altTemporal;
      });
    });
  });
});