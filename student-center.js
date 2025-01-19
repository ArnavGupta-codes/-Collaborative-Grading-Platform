document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.subject-link');
    const hoverCard = document.getElementById('hoverCard');

    links.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            const cardText = e.target.getAttribute('data-card');
            hoverCard.textContent = cardText;

            
            const rect = e.target.getBoundingClientRect();

            hoverCard.style.left = `${rect.left}px`;
            hoverCard.style.top = `${rect.bottom + 5}px`;

            hoverCard.classList.add('show');
        });

        link.addEventListener('mouseleave', () => {
          
            hoverCard.classList.remove('show');
        });
    });
});
