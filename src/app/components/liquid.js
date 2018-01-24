export default class Liquid {
    constructor(container) {
        this.container = container;
        this.liquidRate = this.container.querySelector('.js-liquidRate');
        this.litres = this.container.querySelector('.health__litres');
        this.count();
    }

    count() {
        if (this.litres.dataset.liquid < 2.5) {
            this.liquidRate.innerHTML = 'insufficient';
            this.liquidRate.classList.add('range--low');
        } else {
            this.liquidRate.innerHTML = 'sufficient';
            this.liquidRate.classList.add('range--hight');
        }
    }
}
