export default class CountProgress {
    countIndex(setRate) {
        this.indexRate = this.container.querySelector('.js-numberIndex');
        const arrow = document.querySelector('.js-rateArrow');
        const bg = document.querySelector('.js-rateBg');
        const rateChange = `rotate(${setRate * 1.8}deg)`;
        this.indexRate.innerHTML = setRate;

        if (setRate < 0 || setRate > 100) {
            alert('bad range');
        } else {
            arrow.style.transform = rateChange;
            bg.style.transform = rateChange;

            if (setRate < 31) {
                this.indexRate.classList.add('range--low');
            } else if (setRate < 70) {
                this.indexRate.classList.add('range--middle');
            } else {
                this.indexRate.classList.add('range--hight');
            }
        }
    }
}
