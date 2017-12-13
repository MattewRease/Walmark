const button = document.querySelector('.dropMenu');
const menu = document.querySelector('.dropdown-content');
button.addEventListener('click', () => {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}
);
