export default class Accordion {
    constructor(container) {
        this.container = container;
        this.titles = this.container.querySelectorAll('.js-accordionTitle ');

        /**
         * Event listener on selected title
         */
        this.titles.forEach((title => {
            title.addEventListener('click', () => {
                this.toggle(title);
            });
        }));
    }

    /**
     * Toggle accordion panels.
     *
     * When selected panel is open others are closed.
     * @param {HTMLElement} title - selected panels title
     */

    toggle = (title) => {
        if (!title.classList.contains('selected')) {
            this.titles.forEach(title => {
                title.querySelector('.footer__dropdown-icon').classList.remove('up');
                title.lastElementChild.classList.remove('active'); // Disable panels
            });
            title.querySelector('.footer__dropdown-icon').classList.add('up');
            title.lastElementChild.classList.add('active'); // Enable panel
        }
    }
}
