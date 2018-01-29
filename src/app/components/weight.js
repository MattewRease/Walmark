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
            this.category.classList.add('range--low');
            this.bmi.classList.add('range--low');
            this.overNormal();

        } else if (this.indexBmi > 15 && this.indexBmi < 20) {

            this.category.classList.add('range--middle');
            this.category.innerHTML = 'Close To Normal Weight';
            this.bmi.classList.add('range--middle');

        } else {

            this.category.classList.add('range--hight');
            this.category.innerHTML = 'Normal Weight';
            this.bmi.classList.add('range--hight');
        }
    }

    overNormal = () => {
        this.indexBmi < 15 ? this.category.innerHTML = 'To Low Weight!' : this.category.innerHTML = 'Too High Weight!';
    }
}
