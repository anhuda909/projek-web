const menu = document.querySelector('.barMenu input');
const bar = document.querySelector('nav ul');

menu.addEventListener('click', function () {
    bar.classList.toggle('slide')
});