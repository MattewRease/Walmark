import {range } from './../constants/constants';

const countLiquid = (container, setLitresData, setOptimalLitresData) => {
    const liquidRate = container.querySelector('.js-liquidRate');
    const liquidLowIcon = container.querySelector('.js-liquidLow');
    const liquidNormalIcon = container.querySelector('.js-liquidNormal');
    const optimalLitres = container.querySelector('.js-liquidOptimal');
console.log(range.RANGE_HIGHT_CLASS);
    optimalLitres.innerHTML = setOptimalLitresData;

    if (setLitresData < setOptimalLitresData) {
        liquidRate.innerHTML = 'insufficient';
        if (liquidRate.classList.contains(range.RANGE_HIGHT_CLASS)) {
            liquidRate.classList.remove(range.RANGE_HIGHT_CLASS);
        }
        liquidRate.classList.add(range.RANGE_LOW_CLASS);
        if (liquidNormalIcon.classList.contains('active')) {
            liquidNormalIcon.classList.remove('active');
        }
        liquidLowIcon.classList.add('active');
    } else {
        liquidRate.innerHTML = 'sufficient';
        if (liquidRate.classList.contains(range.RANGE_LOW_CLASS)) {
            liquidRate.classList.remove(range.RANGE_LOW_CLASS);
        }
        liquidRate.classList.add(range.RANGE_HIGHT_CLASS);
        if (liquidLowIcon.classList.contains('active')) {
            liquidLowIcon.classList.remove('active');
        }
        liquidNormalIcon.classList.add('active');
    }
};

export default countLiquid;
