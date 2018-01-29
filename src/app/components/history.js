import countProgress from '../base/countProgress';

export default class History {
    constructor(container) {
        this.container = container;
        this.copyComparisonItem = document.querySelector('.comparison').cloneNode(true);
        this.copyIndexItem = document.querySelector('.health').cloneNode(true);
        this.healthIndex = document.querySelector('.health');
        this.firstBtn = document.querySelector('.js-firstHistory');
        this.closeBtn = this.container.querySelector('.history-modal__close');
        this.secondBtn = document.querySelector('.js-secondHistory');
        this.comparison = document.querySelector('.comparison');
        this.content = this.container.querySelector('.history-modal__content');
        this.newIndexItem = this.content.appendChild(this.copyIndexItem, this.healthIndex.nextSibling);
        this.newComparisonItem = this.content.appendChild(this.copyComparisonItem, this.comparison.nextSibling);
        this.modalWindow = document.querySelector('.history-modal');
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
