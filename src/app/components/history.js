import countProgress from '../base/countProgress';
import countLiquid from '../base/countLiquid';

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
        this.litres = this.container.querySelector('.health__litres');
        this.optimalLitres = this.container.querySelector('.js-liquid-optimal');

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

    /**
     * Show modal window with data by the first history date
     */
    firstHistory = () => {
        this.container.classList.add('active');
        this.indexRate.dataset.index = 28; // set new index rate
        const setRate = this.indexRate.dataset.index;
        this.litres.dataset.liquid = 3;
        this.optimalLitres.dataset.liquid = 2.5;
        const setLitresData = this.litres.dataset.liquid;
        const setOptimalLitresData = this.optimalLitres.dataset.liquid;
        countProgress(this.container, setRate); // count health index by new index rate
        countLiquid(this.container, setLitresData, setOptimalLitresData);

    }

    /**
     * Show modal window with data by the second history date
     */
    secondHistory = () => {
        this.container.classList.add('active');
        this.indexRate.dataset.index = 87; // set new index rate
        const setRate = this.indexRate.dataset.index;
        this.litres.dataset.liquid = 2;
        this.optimalLitres.dataset.liquid = 2.5;
        const setLitresData = this.litres.dataset.liquid;
        const setOptimalLitresData = this.optimalLitres.dataset.liquid;
        countProgress(this.container, setRate); // count health index by new index rate
        countLiquid(this.container, setLitresData, setOptimalLitresData);

    }

    handleClickModal = (event) => {
        event.target === this.modalWindow ? this.closeHistoryModalWindow() : false; // handle outside click
    }

    closeHistoryModalWindow = () => {
        this.modalWindow.classList.remove('active'); // close modal window
    }
}
