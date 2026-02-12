// Crear partículas flotantes en el fondo
document.addEventListener('DOMContentLoaded', function () {
    createFloatingParticles();
});

function createFloatingParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.body.insertBefore(particlesContainer, document.body.firstChild);

    // Crear 30 partículas
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Posición aleatoria
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Tamaño aleatorio
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        // Duración de animación aleatoria
        const duration = Math.random() * 20 + 10;
        particle.style.animationDuration = duration + 's';

        // Delay aleatorio
        const delay = Math.random() * 5;
        particle.style.animationDelay = delay + 's';

        particlesContainer.appendChild(particle);
    }
}
