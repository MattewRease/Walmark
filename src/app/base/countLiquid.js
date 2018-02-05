import { range, state } from './../constants/constants';

const countLiquid = (container, setLitresData, setOptimalLitresData) => {
    const liquidRate = container.querySelector('.js-liquidRate');
    const liquidLowIcon = container.querySelector('.js-liquidLow');
    const liquidNormalIcon = container.querySelector('.js-liquidNormal');
    const optimalLitres = container.querySelector('.js-liquidOptimal');
    optimalLitres.textContent = setOptimalLitresData;

    if (setLitresData < setOptimalLitresData) {
        liquidRate.textContent = 'insufficient';
        if (liquidRate.classList.contains(range.RANGE_HIGHT_CLASS)) {
            liquidRate.classList.remove(range.RANGE_HIGHT_CLASS);
        }
        liquidRate.classList.add(range.RANGE_LOW_CLASS);
        if (liquidNormalIcon.classList.contains(state.active)) {
            liquidNormalIcon.classList.remove(state.active);
        }
        liquidLowIcon.classList.add(state.active);
    } else {
        liquidRate.textContent = 'sufficient';
        if (liquidRate.classList.contains(range.RANGE_LOW_CLASS)) {
            liquidRate.classList.remove(range.RANGE_LOW_CLASS);
        }
        liquidRate.classList.add(range.RANGE_HIGHT_CLASS);
        if (liquidLowIcon.classList.contains(state.active)) {
            liquidLowIcon.classList.remove(state.active);
        }
        liquidNormalIcon.classList.add(state.active);
    }
};

export default countLiquid;
