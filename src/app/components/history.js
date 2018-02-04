import countProgress from '../base/countProgress';

export default class History {
    constructor(container) {
        this.container = container;
        this.modalContent = this.container.querySelector('.js-history-modal__content');
        this.healthIndex = document.querySelector('.js-health'); // select health index component
        this.comparison = document.querySelector('.js-comparison'); // select comparison component
        this.copyIndexItem = document.querySelector('.js-health').cloneNode(true); // copy health index component
        this.copyComparisonItem = document.querySelector('.js-comparison').cloneNode(true); // copy comparison component
        this.newIndexItem = this.modalContent.appendChild(this.copyIndexItem, this.healthIndex.nextSibling); // insert index component to modal window
        this.newComparisonItem = this.modalContent.appendChild(this.copyComparisonItem, this.comparison.nextSibling); // insert comparison component to modal window
        this.historyFirstBtn = document.querySelector('.js-firstHistory');
        this.modalCloseButton = this.container.querySelector('.js-history-modal__close');
        this.historySecondButton = document.querySelector('.js-secondHistory');
        this.modalWindow = document.querySelector('.js-history-modal');
        this.indexRate = this.container.querySelector('.js-numberIndex');

        // Open first history by click
        this.historyFirstBtn.addEventListener('click', this.firstHistory);

        // Open second history by click
        this.historySecondButton.addEventListener('click', this.secondHistory);

        // Close modal window by click close button
        this.modalCloseButton.addEventListener('click', this.closeHistoryModalWindow);

        // Close modal Window by click window except modal content
        this.modalWindow.addEventListener('click', this.handleClickModal);
    }

    callModal = () => {
        this.historySecondButton.addEventListener('click', this.historySecondButton);
    }

    firstHistory = () => {
        this.container.classList.add('active');
        this.indexRate.dataset.index = 28; // set new index rate
        const setRate = this.indexRate.dataset.index;
        countProgress(this.container, setRate); // count health index by new index rate
    }

    secondHistory = () => {
        this.container.classList.add('active');
        this.indexRate.dataset.index = 87; // set new index rate
        const setRate = this.indexRate.dataset.index;
        countProgress(this.container, setRate); // count health index by new index rate
    }

    handleClickModal = (event) => {
        event.target === this.modalWindow ? this.closeHistoryModalWindow() : false;
    }

    closeHistoryModalWindow = () => {
        this.modalWindow.classList.remove('active');
    }
}
