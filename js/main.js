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

/*Open/close the hamburger menu by toggling CSS classes as follows:*/

const hamburger = document.querySelector(".hamburger")
const nav_menu = document.querySelector(".nav-menu")
hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active");
  nav_menu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  nav_menu.classList.remove("active");
}))
document.addEventListener('DOMContentLoaded', function() {
    // Obtener la sección de "Inicio"
    const inicioSection = document.getElementById('inicio');

    // Mostrar la sección de "Inicio" al cargar la página
    inicioSection.style.display = 'block';
});
