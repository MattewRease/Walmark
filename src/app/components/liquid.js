import countLiquid from '../base/countLiquid';

export default class Liquid {
    constructor(container) {
        this.container = container;
        this.liquidRate = this.container.querySelector('.js-liquidRate');
        this.liquidLowIcon = this.container.querySelector('.js-liquidLow');
        this.liquidNormalIcon = this.container.querySelector('.js-liquidNormal');
        this.litres = this.container.querySelector('.health__litres');
        this.optimalLitres = this.container.querySelector('.js-liquidOptimal');
        const setOptimalLitresData = this.optimalLitres.dataset.optimal;

        countLiquid(this.container, setOptimalLitresData);
    }

}
