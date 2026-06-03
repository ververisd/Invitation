const card = document.getElementById('card');
const hint = document.querySelector('.hint');

card.addEventListener('click', () => {
    card.classList.toggle('flipped');
    hint.style.display = 'none';
});
