// js/menu.js
document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("menu-track");
    const btnPrev = document.getElementById("prev-btn");
    const btnNext = document.getElementById("next-btn");

    // Solo activamos las flechas si existen en la pantalla
    if (btnNext && btnPrev && track) {
        
        btnNext.addEventListener("click", () => {
            // Buscamos el ancho exacto de una tarjeta + el espacio (gap)
            const cardWidth = track.querySelector(".menu-card-large").offsetWidth + 20;
            // Scrolleamos a la derecha
            track.scrollBy({ left: cardWidth, behavior: 'smooth' });
        });

        btnPrev.addEventListener("click", () => {
            const cardWidth = track.querySelector(".menu-card-large").offsetWidth + 20;
            // Scrolleamos a la izquierda (valor negativo)
            track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        });
    }
});