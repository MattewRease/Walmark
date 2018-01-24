class Progress {
    constructor(container) {
        this.container = container;
        this.progress = this.container.querySelector('.js-numberIndex');
        this.arrow = this.container.querySelector('.js-rateArrow');
        this.bg = this.container.querySelector('.js-rateBg');
        this.progressData = this.progress.dataset.index;
        this.rateChange = `rotate(${this.progressData * 1.8}deg)`;
        this.rateIndex();
    }

    rateIndex() {
        if (this.progressData < 0 || this.progressData > 100) {
            false;
        } else {
            this.progress.innerHTML = (this.progressData);
            this.arrow.style.transform = this.rateChange;
            this.bg.style.transform = this.rateChange;

            if (this.progressData < 31) {
                this.progress.classList.add('range--low');
            } else if (this.progressData < 70) {
                this.progress.classList.add('range--middle');
            } else {
                this.progress.classList.add('range--hight');
            }
        }
    }
}
export default Progress;
