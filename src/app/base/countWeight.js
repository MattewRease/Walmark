import { range, bmiRangeLimits } from './../constants/constants';

// Count weight category by BMI index
const countWeight = (container, indexBmi) => {
    const bmi = container.querySelector('.js-index-bmi');
    const category = container.querySelector('.js-weight-category');

    bmi.textContent = indexBmi;

    if (indexBmi < bmiRangeLimits.BMI_RANGE_LOW || indexBmi > bmiRangeLimits.BMI_RANGE_HIGHT) {
        category.classList.add(range.RANGE_LOW_CLASS);
        bmi.classList.add(range.RANGE_LOW_CLASS);
        indexBmi < bmiRangeLimits.BMI_RANGE_LOW ? category.textContent = 'To Low Weight!' : category.textContent = 'Too High Weight!';

    } else if (indexBmi > bmiRangeLimits.BMI_RANGE_LOW && indexBmi < bmiRangeLimits.BMI_RANGE_NORMAL) {
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
