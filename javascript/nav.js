document.querySelector('.burger-menu').addEventListener('click', function() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('nav--open');
});

document.querySelector('.nav__close-button').addEventListener('click', function() {
    const nav = document.querySelector('.nav');
    nav.classList.remove('nav--open'); 
});

document.addEventListener('click', function(event) {
    const nav = document.querySelector('.nav');
    const burgerMenu = document.querySelector('.burger-menu');

    if (!nav.contains(event.target) && !burgerMenu.contains(event.target) && nav.classList.contains('nav--open')) {
        nav.classList.remove('nav--open');
    }
});