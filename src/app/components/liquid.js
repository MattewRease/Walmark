export default class Liquid {
    constructor(container) {
        this.container = container;
        this.liquidRate = this.container.querySelector('.js-liquidRate');
        this.litres = this.container.querySelector('.health__litres');
        this.optimalLitres = this.container.querySelector('.js-liquid-optimal');
        this.count();
    }

    count = () => {
        if (this.litres.dataset.liquid < this.optimalLitres.dataset.optimal) {
            this.liquidRate.innerHTML = 'insufficient';
            this.liquidRate.classList.add('range--low');
        } else {
            this.liquidRate.innerHTML = 'sufficient';
            this.liquidRate.classList.add('range--hight');
        }
    }
}
