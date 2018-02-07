import { range, bmiRangeLimits, bmiCategory } from './../constants/constants';

// Count weight category by BMI index
const countWeight = (container, bmiIndex) => {
    const bmiValue = container.querySelector('.js-index-bmi');
    const category = container.querySelector('.js-weight-category');

    bmiValue.textContent = bmiIndex;

    if (bmiIndex < bmiRangeLimits.LOW || bmiIndex > bmiRangeLimits.HIGHT) {
        category.classList.add(range.RANGE_LOW_CLASS);
        bmiValue.classList.add(range.RANGE_LOW_CLASS);
        bmiIndex < bmiRangeLimits.LOW ? category.textContent = bmiCategory.LOW : category.textContent = bmiCategory.HIGHT;

    } else if (bmiIndex > bmiRangeLimits.LOW && bmiIndex < bmiRangeLimits.NORMAL) {
        category.classList.add(range.RANGE_MIDDLE_CLASS);
        category.textContent = bmiCategory.NEARLY_NORMAL;
        bmiValue.classList.add(range.RANGE_MIDDLE_CLASS);

    } else {
        category.classList.add(range.RANGE_HIGHT_CLASS);
        category.textContent = bmiCategory.NORMAL;
        bmiValue.classList.add(range.RANGE_HIGHT_CLASS);
    }
};

export default countWeight;
