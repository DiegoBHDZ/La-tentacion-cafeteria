// js/parallax.js

document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.getElementById("hero");
    const heroBg = document.getElementById("hero-bg");

    
    if (window.innerWidth > 768) {
        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;

        // 1. Escuchar el movimiento del ratón
        heroSection.addEventListener("mousemove", (e) => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            // Convertimos la posición a un rango de -1 a 1
            targetX = (e.clientX / width) * 2 - 1;
            targetY = (e.clientY / height) * 2 - 1;
        });

        // Si el ratón sale, devolvemos los valores al centro
        heroSection.addEventListener("mouseleave", () => {
            targetX = 0;
            targetY = 0;
        });


        
        function animate() {
            currentX += (targetX - currentX) * 1.05;
            currentY += (targetY - currentY) * 1.05;

            const moveX = currentX * -20; 
            const moveY = currentY * -20;

            heroBg.style.transform = `scale(1.1) translate3d(${moveX}px, ${moveY}px, 0)`;
            
            requestAnimationFrame(animate);
        }
        
        
        setTimeout(() => {
            animate(); 
        }, 1800);
        
    } // (Cierre del if window.innerWidth > 768)
});