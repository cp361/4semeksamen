const menu = document.querySelector('.menu-icon');
const mobileMenuList = document.querySelector('.mobile-navbar-list');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    mobileMenuList.classList.toggle('active');
})