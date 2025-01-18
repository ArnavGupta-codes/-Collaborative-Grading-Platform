document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.subject-link');
    const hoverCard = document.getElementById('hoverCard');

    links.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            const cardText = e.target.getAttribute('data-card');
            hoverCard.textContent = cardText;

            // Get the position of the hovered link
            const rect = e.target.getBoundingClientRect();

            // Position the card relative to the hovered link
            hoverCard.style.left = `${rect.left}px`;
            hoverCard.style.top = `${rect.bottom + 5}px`;

            // Show the card
            hoverCard.classList.add('show');
        });

        link.addEventListener('mouseleave', () => {
            // Hide the card
            hoverCard.classList.remove('show');
        });
    });
});
