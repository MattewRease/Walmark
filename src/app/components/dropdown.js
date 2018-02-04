export default class Dropdown {
    constructor(container) {
        this.container = container;
        this.dropdownButton = this.container.querySelector('.js-dropdown-button');
        this.dropdownMenu = this.container.querySelector('.js-dropdown-menu');

        // Toggle menu by click on button
        this.dropdownButton.addEventListener('click', this.toggle);
    }

    /**
     * Toggle active class
     */
    toggle = () => {
        this.dropdownMenu.classList.toggle('active');
    };
}
