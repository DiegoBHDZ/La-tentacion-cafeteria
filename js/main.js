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

    // === INICIALIZACIÓN MAESTRA GSAP ===
    // 4. Inicializar animaciones del Hero
    if(document.querySelector(".hero")) {
        initPremiumHero();
    }
    
    // 5. Inicializar animaciones de Nosotros
    if(document.querySelector(".about-card")) {
        initAboutCards();
    }
});

// =======================================================
// FUNCIONES DE ANIMACIÓN
// =======================================================

function initPremiumHero() {
    const masterTl = gsap.timeline({ delay: 0.2 });

    masterTl.to(".hero-bg-wrapper", {
        clipPath: "inset(0% 0 0% 0)", 
        duration: 2,
        ease: "expo.inOut"
    }, 0)
    .to(".hero-bg", {
        scale: 1, 
        duration: 2.5,
        ease: "power3.out"
    }, 0)
    .to(".reveal-mask > *", {
        y: "0%", 
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.15 
    }, "-=1.2"); 
}

function initAboutCards() {
    gsap.registerPlugin(ScrollTrigger);
    const cards = gsap.utils.toArray(".about-card");

    // FASE 1: Animación de entrada
    cards.forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            y: 80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    });

    // FASE 2: Efecto de profundidad (Scrub)
    cards.forEach((card, i) => {
        if (i !== cards.length - 1) { 
            gsap.to(card, {
                scale: 0.92,
                opacity: 0.4,
                scrollTrigger: {
                    trigger: cards[i + 1],
                    start: "top 75%",
                    end: "top 25%",
                    scrub: true
                }
            });
        }
    });
}