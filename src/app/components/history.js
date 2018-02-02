import countProgress from '../base/countProgress';

export default class History {
    constructor(container) {
        this.container = container;
        this.content = this.container.querySelector('.history-modal__content');
        this.healthIndex = document.querySelector('.js-health'); // select health index component
        this.comparison = document.querySelector('.js-comparison'); // select comparison component
        this.copyIndexItem = document.querySelector('.js-health').cloneNode(true); // copy health index component
        this.copyComparisonItem = document.querySelector('.js-comparison').cloneNode(true); // copy comparison component
        this.newIndexItem = this.content.appendChild(this.copyIndexItem, this.healthIndex.nextSibling); // insert index component to modal window
        this.newComparisonItem = this.content.appendChild(this.copyComparisonItem, this.comparison.nextSibling); // insert comparison component to modal window
        this.firstBtn = document.querySelector('.js-firstHistory');
        this.closeBtn = this.container.querySelector('.history-modal__close');
        this.secondBtn = document.querySelector('.js-secondHistory');
        this.modalWindow = document.querySelector('.js-history-modal');
        this.indexRate = this.container.querySelector('.js-numberIndex');

        this.firstHistory();
        this.secondHistory();
        this.historyModalWindow();
    }

    callModal = () => {
        this.secondBtn.addEventListener('click', this.secondBtn);
    }

    firstHistory = () => {
        this.firstBtn.addEventListener('click', () => {
            this.container.classList.add('active');
            this.indexRate.dataset.index = 28;
            const setRate = this.indexRate.dataset.index;
            countProgress(this.container, setRate);
        });
    }

    secondHistory = () => {
        this.secondBtn.addEventListener('click', () => {
            this.container.classList.add('active');
            this.indexRate.dataset.index = 87;
            const setRate = this.indexRate.dataset.index;
            countProgress(this.container, setRate);
        });
    }

    historyModalWindow = () => {
        this.closeBtn.addEventListener('click', () => {
            this.closeBtn ? this.close() : false;
        });
        this.modalWindow.addEventListener('click', () => {
            event.target === this.modalWindow ? this.close() : false;

        });
    }

    close() {
        this.modalWindow.classList.remove('active');
    }
}
