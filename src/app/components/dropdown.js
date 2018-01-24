export default class DropMenu {
    constructor(container) {
        this.container = container;
        this.dropBtn = this.container.querySelector('.js-dropMenu');
        this.menu = this.container.querySelector('.js-dropdown-content');

        this.toggle();
    }

    toggle() {
        this.dropBtn.addEventListener('click', () => {
            if (this.menu.classList.contains('active')) {
                this.menu.classList.remove('active');
            } else {
                this.menu.classList.add('active');
            }
        });
    }
}
