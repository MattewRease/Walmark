import countWeight from '../base/countWeight';

export default class Weight {
    constructor(container) {
        this.container = container;
        this.bmiValue = this.container.querySelector('.js-index-bmi');
        const bmiIndex = this.bmiValue.dataset.bmi;

        countWeight(this.container, bmiIndex);
    }
}
