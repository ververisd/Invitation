const card = document.getElementById('card');
const hint = document.querySelector('.hint');

card.addEventListener('click', () => {
    card.classList.toggle('flipped');

    if (hint) {
        hint.style.opacity = '0';

        // remove completely after fade animation
        setTimeout(() => {
            hint.style.display = 'none';
        }, 400);
    }
});
