import countProgress from '../base/countProgress';
import countLiquid from '../base/countLiquid';
import { state } from './../constants/constants';

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
        this.optimalLitres = this.container.querySelector('.js-liquidOptimal');

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
        this.container.classList.add(state.active);
        this.indexRate.dataset.index = 28; // set new index rate
        const setRate = this.indexRate.dataset.index;
        this.litres.dataset.liquid = 3; // Set daily liquid intake
        this.optimalLitres.dataset.liquid = 2.5; // Set daily optimal litres
        const setLitresData = this.litres.dataset.liquid;
        const setOptimalLitresData = this.optimalLitres.dataset.liquid;
        countProgress(this.container, setRate); // count health index by new index rate
        countLiquid(this.container, setLitresData, setOptimalLitresData); // count daily liquid rate

    }

    /**
     * Show modal window with data by the second history date
     */
    secondHistory = () => {
        this.container.classList.add(state.active);
        this.indexRate.dataset.index = 87; // set new index rate
        const setRate = this.indexRate.dataset.index;
        this.litres.dataset.liquid = 2; // Set daily liquid intake
        this.optimalLitres.dataset.liquid = 2.5; // Set daily optimal litres
        const setLitresData = this.litres.dataset.liquid;
        const setOptimalLitresData = this.optimalLitres.dataset.liquid;
        countProgress(this.container, setRate); // count health index by new index rate
        countLiquid(this.container, setLitresData, setOptimalLitresData); // count daily liquid rate
    }

    // handle outside click
    handleClickModal = (event) => {
        event.target === this.modalWindow ? this.closeHistoryModalWindow() : false;
    }

    // close modal window
    closeHistoryModalWindow = () => {
        this.modalWindow.classList.remove(state.active);
    }
}
