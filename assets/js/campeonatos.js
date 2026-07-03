const botones = document.querySelectorAll(".btn_filter");
const categorias = document.querySelectorAll(".camp_categoria");

botones.forEach(btn => {
    btn.addEventListener("click", () => {
        botones.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filtro = btn.dataset.filter;
        categorias.forEach(categoria => {
            const card = categoria.querySelector(".camp_card");
            if (filtro === "all" || card.dataset.categoria === filtro) {
                categoria.style.display = "block";
            } else {
                categoria.style.display = "none";
            }
        });
    });
});