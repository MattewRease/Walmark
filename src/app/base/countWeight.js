import { range, bmiRangeLimits, bmiCategory } from './../constants/constants';

// Count weight category by BMI index
const countWeight = (container, indexBmi) => {
    const bmi = container.querySelector('.js-index-bmi');
    const category = container.querySelector('.js-weight-category');

    bmi.textContent = indexBmi;

    if (indexBmi < bmiRangeLimits.LOW || indexBmi > bmiRangeLimits.HIGHT) {
        category.classList.add(range.RANGE_LOW_CLASS);
        bmi.classList.add(range.RANGE_LOW_CLASS);
        indexBmi < bmiRangeLimits.LOW ? category.textContent = bmiCategory.LOW : category.textContent = bmiCategory.HIGHT;

    } else if (indexBmi > bmiRangeLimits.LOW && indexBmi < bmiRangeLimits.NORMAL) {
        category.classList.add(range.RANGE_MIDDLE_CLASS);
        category.textContent = bmiCategory.NEARLY_NORMAL;
        bmi.classList.add(range.RANGE_MIDDLE_CLASS);

    } else {
        category.classList.add(range.RANGE_HIGHT_CLASS);
        category.textContent = bmiCategory.NORMAL;
        bmi.classList.add(range.RANGE_HIGHT_CLASS);
    }
};

export default countWeight;
