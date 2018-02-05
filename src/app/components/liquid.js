import countLiquid from '../base/countLiquid';

export default class Liquid {
    constructor(container) {
        this.container = container;
        this.liquidRate = this.container.querySelector('.js-liquid-rate');
        this.liquidLowIcon = this.container.querySelector('.js-liquid-low');
        this.optimalLitres = this.container.querySelector('.js-liquid-optimal');
        const setOptimalLitresData = this.optimalLitres.dataset.optimal;

        countLiquid(this.container, setOptimalLitresData);
    }

}
