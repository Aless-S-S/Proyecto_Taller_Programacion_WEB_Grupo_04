const toggle = document.querySelector(".menu_toggle");
const menu = document.querySelector(".nav_contenedor_rutas");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

// Inyectar botón flotante de WhatsApp
const whatsappButton = `
  <a href="https://wa.me/51953233175?text=Hola!%20Quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20salas%20y%20promociones%20de%20GameCenter." 
     class="whatsapp-float" 
     target="_blank" 
     rel="noopener noreferrer" 
     aria-label="Contactar por WhatsApp">
    <div class="whatsapp-tooltip">¡Escríbenos por WhatsApp!</div>
    <div class="whatsapp-icon-wrapper">
      <i class="fa-brands fa-whatsapp"></i>
    </div>
  </a>
`;

document.body.insertAdjacentHTML("beforeend", whatsappButton);

// Inyectar enlace al Libro de Reclamaciones en el footer (debajo de GAME CENTER)
const footerBrand = document.querySelector(".footer_brand");
if (footerBrand) {
  const reclamacionesLink = `
    <div class="libro-reclamaciones-container" style="margin-top: 15px;">
      <a href="reclamaciones.html" target="_blank" rel="noopener noreferrer" class="libro-reclamaciones-link">
        <img src="./images/logo_libro_reclam.png" alt="Libro de Reclamaciones" class="libro-reclamaciones-logo" />
      </a>
    </div>
  `;
  footerBrand.insertAdjacentHTML("beforeend", reclamacionesLink);
}


