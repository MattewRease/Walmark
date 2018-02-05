import { range } from './../constants/constants';

const countProgress = (container, setRate) => {
    const indexRate = container.querySelector('.js-numberIndex');
    const arrow = container.querySelector('.js-rateArrow');
    const bg = container.querySelector('.js-rateBg');
    const rateChange = `rotate(${setRate * 1.8}deg)`;
    indexRate.innerHTML = setRate;

    if (setRate < 0 || setRate > 100) {
        alert('bad range');
    } else {
        arrow.style.transform = rateChange;
        bg.style.transform = rateChange;

        if (setRate < 31) {
            indexRate.classList.add(range.RANGE_LOW_CLASS);
        } else if (setRate < 70) {
            indexRate.classList.add(range.RANGE_MIDDLE_CLASS);
        } else {
            indexRate.classList.add(range.RANGE_HIGHT_CLASS);
        }
    }
};

export default countProgress;
