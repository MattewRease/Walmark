import { range } from './../constants/constants';

// Count weight category by BMI index
const countWeight = (container, indexBmi) => {
    const bmi = container.querySelector('.js-index-bmi');
    const category = container.querySelector('.js-weight-category');

    bmi.textContent = indexBmi;

    if (indexBmi < 15 || indexBmi > 25) {
        category.classList.add(range.RANGE_LOW_CLASS);
        bmi.classList.add(range.RANGE_LOW_CLASS);
        indexBmi < 15 ? category.textContent = 'To Low Weight!' : category.textContent = 'Too High Weight!';

    } else if (indexBmi > 15 && indexBmi < 20) {
        category.classList.add(range.RANGE_MIDDLE_CLASS);
        category.textContent = 'Close To Normal Weight';
        bmi.classList.add(range.RANGE_MIDDLE_CLASS);

    } else {
        category.classList.add(range.RANGE_HIGHT_CLASS);
        category.textContent = 'Normal Weight';
        bmi.classList.add(range.RANGE_HIGHT_CLASS);
    }
};

export default countWeight;
