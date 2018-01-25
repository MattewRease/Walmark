// import CountProgress from './../base/countProgress';

export default class History {
    constructor(container) {
        this.container = container;
        // this.countProgress = new CountProgress();
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

    callModal() {
        this.secondBtn.addEventListener('click', this.secondBtn);
    }

    firstHistory() {
        this.firstBtn.addEventListener('click', () => {
            this.container.classList.add('active');
            this.indexRate.dataset.index = 78;
            const setRate = this.indexRate.dataset.index;
            // this.countProgress.countIndex(setRate);
            this.countIndex(setRate);
        });
    }

    secondHistory() {
        this.secondBtn.addEventListener('click', () => {
            this.container.classList.add('active');
            this.indexRate.dataset.index = 57;
            const setRate = this.indexRate.dataset.index;
            // this.countProgress.countIndex(setRate);
            this.countIndex(setRate);
        });
    }

    countIndex(setRate) {
        this.indexRate = this.container.querySelector('.js-numberIndex');
        const arrow = document.querySelector('.js-rateArrow');
        const bg = document.querySelector('.js-rateBg');
        const rateChange = `rotate(${setRate * 1.8}deg)`;
        this.indexRate.innerHTML = setRate;

        if (setRate < 0 || setRate > 100) {
            alert('bad range');
        } else {
            arrow.style.transform = rateChange;
            bg.style.transform = rateChange;

            if (setRate < 31) {
                this.indexRate.classList.add('range--low');
            } else if (setRate < 70) {
                this.indexRate.classList.add('range--middle');
            } else {
                this.indexRate.classList.add('range--hight');
            }
        }
    }

    historyModalWindow() {
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
