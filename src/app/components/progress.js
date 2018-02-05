import countProgress from '../base/countProgress';

class Progress {
    constructor(container) {
        this.container = container;
        this.indexRate = this.container.querySelector('.js-number-index');
        this.indexRate.dataset.index = 65;
        const setRate = this.indexRate.dataset.index;
        countProgress(this.container, setRate);
    }

}
export default Progress;
