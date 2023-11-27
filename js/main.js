// Obtener referencias a los enlaces de la barra de navegación
const navLinks = document.querySelectorAll('nav ul li a');

// Asignar un evento de clic a cada enlace
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Ocultar todas las secciones
    document.querySelectorAll('main section').forEach(section => {
      section.style.display = 'none';
    });

    // Mostrar la sección correspondiente al enlace clickeado
    const targetId = link.getAttribute('href').substring(1);
    document.getElementById(targetId).style.display = 'block';
  });
});
