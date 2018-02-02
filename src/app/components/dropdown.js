export default class Dropdown {
    constructor(container) {
        this.container = container;
        this.dropdownButton = this.container.querySelector('.js-dropdown-button');
        this.dropdownMenu = this.container.querySelector('.js-dropdown-menu');

        // Toggle menu by click on button
        this.dropdownButton.addEventListener('click', this.toggle);
    }

    /**
     * Toggle menu class
     */
    toggle = () => {
        if (this.dropdownMenu.classList.contains('active')) {
            this.dropdownMenu.classList.remove('active'); // Close if open
        } else {
            this.dropdownMenu.classList.add('active'); // Open if close
        }
    };
}
