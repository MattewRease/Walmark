import countLiquid from '../base/countLiquid';

export default class Liquid {
    constructor(container) {
        this.container = container;
        this.liquidRate = this.container.querySelector('.js-liquidRate');
        this.liquidLowIcon = this.container.querySelector('.js-liquidLow');
        this.liquidNormalIcon = this.container.querySelector('.js-liquidNormal');
        this.litres = this.container.querySelector('.health__litres');
        this.optimalLitres = this.container.querySelector('.js-liquidOptimal');
        this.litres.dataset.liquid = 1;
        this.optimalLitres.dataset.liquid = 1.5;
        const setLitresData = this.litres.dataset.liquid;
        const setOptimalLitresData = this.optimalLitres.dataset.liquid;

        countLiquid(this.container, setLitresData, setOptimalLitresData);
    }

}
