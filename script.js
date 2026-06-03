const card = document.getElementById('card');
const hint = document.querySelector('.hint');

card.addEventListener('click', () => {
    card.classList.toggle('flipped');

    if (hint) {
        hint.style.opacity = '0';
    }
});
