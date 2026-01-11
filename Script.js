document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');

    // Funktion för att visa ett meddelande när man klickar på knappen
    ctaButton.addEventListener('click', () => {
        alert('Hammarbyismen är inte bara en åsikt, det är ett sätt att leva. Just idag är jag stark!');
    });

    // Enkel scroll-effekt för navigering
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
