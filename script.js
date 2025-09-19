// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // Lógica para el menú de hamburguesa
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mainNav = document.getElementById('main-nav');

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // Lógica para la sección de preguntas frecuentes (FAQ)
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            
            // Alterna la clase 'open' en el elemento padre para controlar el estilo del ícono
            question.classList.toggle('open');
            
            // Alterna la clase 'open' en la respuesta para mostrar u ocultar el contenido
            const faqAnswer = faqItem.querySelector('.faq-answer');
            faqAnswer.classList.toggle('open');
        });
    });

});