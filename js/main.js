// js/main.js

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-item");

    // 1. Control del color de fondo al hacer scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 2. Abrir/Cerrar el menú móvil al tocar la hamburguesa
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            // Esto es lo que activa los estilos premium que pegaste en el CSS
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
            
            if (window.scrollY <= 50) {
                navbar.classList.toggle("scrolled");
            }
        });
    }

    // 3. Cerrar el menú automáticamente cuando hacen clic en un enlace
    if (navItems.length > 0) {
        navItems.forEach(item => {
            item.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });
    }
});