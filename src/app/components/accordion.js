export default class Accordion {
    constructor(container) {
        this.container = container;
        this.titles = this.container.querySelectorAll('.accordiontitle ');
        this.select();
    }

    select() {
        this.titles.forEach(title => {
            title.addEventListener('click', () => {
                this.toggle(title);
            });
        });
    }

    toggle(title) {
        if (!title.classList.contains('selected')) {
            this.titles.forEach(title => {
                title.querySelector('.footer__dropdown-icon').classList.remove('up');
                title.lastElementChild.classList.remove('active');
            });
            title.querySelector('.footer__dropdown-icon').classList.add('up');
            title.lastElementChild.classList.add('active');
        }
    }
}
