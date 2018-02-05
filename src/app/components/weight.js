import { range } from './../constants/constants';

export default class Weight {
    constructor(container) {
        this.container = container;
        this.bmi = this.container.querySelector('.health__weight--bmi');
        this.indexBmi = this.bmi.dataset.bmi;
        this.category = this.container.querySelector('.js-weightCategory');
        this.bmi.innerHTML = this.indexBmi;
        this.countWeight();
    }

    countWeight = () => {
        if (this.indexBmi < 15 || this.indexBmi > 25) {
            this.category.classList.add(range.RANGE_LOW_CLASS);
            this.bmi.classList.add(range.RANGE_LOW_CLASS);
            this.overNormal();

        } else if (this.indexBmi > 15 && this.indexBmi < 20) {

            this.category.classList.add(range.RANGE_MIDDLE_CLASS);
            this.category.innerHTML = 'Close To Normal Weight';
            this.bmi.classList.add(range.RANGE_MIDDLE_CLASS);

        } else {

            this.category.classList.add(range.RANGE_HEIGHT_CLASS);
            this.category.innerHTML = 'Normal Weight';
            this.bmi.classList.add(range.RANGE_HEIGHT_CLASS);
        }
    }

    overNormal = () => {
        this.indexBmi < 15 ? this.category.innerHTML = 'To Low Weight!' : this.category.innerHTML = 'Too High Weight!';
    }
}
