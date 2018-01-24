export default () => {
    const button = document.querySelector('.js-dropMenu');
    const menu = document.querySelector('.js-dropdown-content');
    button.addEventListener('click', () => {
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    }
    );
};

// export default class DropMenu {
//     constructor(container) {
//         this.container = container;
//         const dropBtn = container.querySelector('.dropMenu');
//         console.log(dropBtn);

//         this.dropBtn.addEventListener('click', this.massege);
//     }

//     massege() {
//         const dropMenu = container.querySelector('.dropdown-content');
//         if (this.dropMenu.style.display === 'flex') {
//             this.dropMenu.style.display = 'none';
//         } else {
//             this.dropMenu.style.display = 'flex';
//         }
//     }
// }
