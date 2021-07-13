const bukaNav = document.getElementById('mobile-open-nav')
        nav = document.querySelector('nav')
        tutupNav = document.getElementById('mobile-close-nav');

bukaNav.addEventListener('click', () => {
    nav.classList.add('menu-btn');
})

tutupNav.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})
