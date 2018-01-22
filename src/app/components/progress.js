const Progress = (container) => {
    const rate = container.querySelector('.js-numberIndex');
    const arrow = container.querySelector('.js-rateArrow');
    const bg = container.querySelector('.js-rateBg');
    const rateChange = `rotate(${rate.dataset.index * 1.8}deg)`;

    if (rate.dataset.index < 0 || rate.dataset.index > 100) {
        false;
    } else {
        rate.innerHTML = (rate.dataset.index);
        arrow.style.transform = rateChange;
        bg.style.transform = rateChange;

        if (rate.dataset.index < 31) {
            rate.classList.add('range--low');
        } else if (rate.dataset.index < 70) {
            rate.classList.add('range--middle');
        } else {
            rate.classList.add('range--hight');
        }
    }
};

export default Progress;
