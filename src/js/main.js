document.addEventListener("DOMContentLoaded", () => {
    const lazyLoadInstance = new LazyLoad();
    drawNavbar();
    drawSlider();
    new WOW().init();
})

function drawSlider() {
    const headerSlider = tns({
        container: '.header_slider',
        items: 1,
        mode: 'gallery',
        controlsContainer: '.header_slider-controls',
        loop: false,
        speed: 500
    });
}
function drawNavbar() {
    const nav = document.querySelector('.navbar'),
        navOffset = nav.offsetTop,
        trigger = document.querySelector('.hamburger--minus'),
        menu = document.querySelector('.navbar_menu');

    trigger.addEventListener('click', () => {
        trigger.classList.toggle('is-active');
        menu.classList.toggle('is-active-nav');
        nav.classList.add('sticky');
    })

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > navOffset) {
            nav.classList.add('sticky');
        } else if (!menu.matches('.is-active-nav')) {
            nav.classList.remove('sticky');
        }
    })
}