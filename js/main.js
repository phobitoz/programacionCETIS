// Obtener referencia al título h1
const title = document.querySelector('h1');

// Agregar evento de clic al título para la animación
title.addEventListener('click', () => {
    title.style.animation = 'bounce 1s infinite';
});
