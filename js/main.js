const hamburger = document.getElementById('hamburger');
const leftNavUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    leftNavUL.classList.toggle('show');
});