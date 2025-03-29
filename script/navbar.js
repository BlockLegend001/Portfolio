let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-80px'; 
    } else {
        navbar.style.top = '0';
    }

    lastScrollTop = scrollTop;
});
