class Progress {
    constructor(container) {
        this.container = container;
        this.progress = this.container.querySelector('.js-numberIndex');
        this.progress.dataset.index = 65;
        const progressData = this.progress.dataset.index;
        this.rateIndex(progressData);
    }

    rateIndex = (progressData) => {
        this.arrow = this.container.querySelector('.js-rateArrow');
        this.bg = this.container.querySelector('.js-rateBg');
        this.rateChange = `rotate(${progressData * 1.8}deg)`;

        if (progressData < 0 || progressData > 100) {
            false;
        } else {
            this.progress.innerHTML = (progressData);
            this.arrow.style.transform = this.rateChange;
            this.bg.style.transform = this.rateChange;

            if (progressData < 31) {
                this.progress.classList.add('range--low');
            } else if (progressData < 70) {
                this.progress.classList.add('range--middle');
            } else {
                this.progress.classList.add('range--hight');
            }
        }
    }
}
export default Progress;
