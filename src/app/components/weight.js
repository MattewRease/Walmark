export default () => {
    const bmi = document.querySelector('.health__weight--bmi');
    const indexBmi = bmi.dataset.bmi;
    const category = document.getElementById('weightCategory');

    bmi.innerHTML = indexBmi;

    if (indexBmi < 15 || indexBmi > 30) {

        indexBmi < 15 ? category.innerHTML = 'To Low Weight!' : category.innerHTML = 'Too High Weight!';

        category.classList.add('range--low');
        bmi.classList.add('range--low');

    } else if (indexBmi > 15 && indexBmi < 20) {

        category.classList.add('range--middle');
        category.innerHTML = 'Close To Normal Weight';
        bmi.classList.add('range--middle');

    } else {

        category.classList.add('range--hight');
        category.innerHTML = 'Normal Weight';
        bmi.classList.add('range--hight');
    }
};
