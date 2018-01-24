// const Progress = (container) => {
//     const rate = container.querySelector('.js-numberIndex');
//     const arrow = container.querySelector('.js-rateArrow');
//     const bg = container.querySelector('.js-rateBg');
//     const rateChange = `rotate(${rate.dataset.index * 1.8}deg)`;

//     if (rate.dataset.index < 0 || rate.dataset.index > 100) {
//         false;
//     } else {
//         rate.innerHTML = (rate.dataset.index);
//         arrow.style.transform = rateChange;
//         bg.style.transform = rateChange;

//         if (rate.dataset.index < 31) {
//             rate.classList.add('range--low');
//         } else if (rate.dataset.index < 70) {
//             rate.classList.add('range--middle');
//         } else {
//             rate.classList.add('range--hight');
//         }
//     }
// };

// export default Progress;

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
