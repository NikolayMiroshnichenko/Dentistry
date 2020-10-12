const openMenuBtn = document.querySelector('.menu-open');
const menu = document.querySelector('.js-menu');

openMenuBtn.addEventListener('click', openMenu);
menu.addEventListener('click', closeMenu)

function openMenu() {
    menu.classList.add('active');
}

function closeMenu(e) {
    if(e.target.dataset.menu !== 'close') return;
    menu.classList.remove('active');
}

