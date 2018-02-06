import countWeight from '../base/countWeight';

export default class Weight {
    constructor(container) {
        this.container = container;
        this.bmi = this.container.querySelector('.js-index-bmi');
        const indexBmi = this.bmi.dataset.bmi;

        countWeight(this.container, indexBmi);
    }
}
