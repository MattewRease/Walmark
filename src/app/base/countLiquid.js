import { range, state } from './../constants/constants';

const countLiquid = (container, setOptimalLitresData) => {
    const liquidRate = container.querySelector('.js-liquid-rate');
    const liquidIcon = container.querySelector('.js-liquid-icon');
    const optimalLitres = container.querySelector('.js-liquid-optimal');
    const dailyIntake = liquidRate.dataset.intake;
    const RANGE_HIGHT_ICON = 'range-icon--hight';
    const RANGE_LOW_ICON = 'range-icon--low';
    const hightDailyIntakeIcon = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/gfx/svg/sprites/icons.svg#smile"></use>';
    const lowDailyIntakeIcon = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/gfx/svg/sprites/icons.svg#sad"></use>';

    optimalLitres.textContent = setOptimalLitresData;

    let className;
    let icon;
    let iconClassName;
    let liquidStatus;

    switch (dailyIntake) {
        case 'insufficient':
            className = range.RANGE_LOW_CLASS;
            icon = lowDailyIntakeIcon;
            iconClassName = RANGE_LOW_ICON;
            liquidStatus = 'insufficient';
            break;
        case 'sufficient':
            className = range.RANGE_HIGHT_CLASS;
            icon = hightDailyIntakeIcon;
            iconClassName = RANGE_HIGHT_ICON;
            liquidStatus = 'sufficient';
            break;
        default:return;
    }

    if (dailyIntake) {
        liquidRate.classList.add(className);
        liquidRate.textContent = liquidStatus;
        liquidIcon.innerHTML = icon;
        liquidIcon.classList.add(iconClassName);
    } else {
        liquidRate.classList.add(className);
        liquidRate.textContent = liquidStatus;
        liquidIcon.innerHTML = icon;
        liquidIcon.classList.add(iconClassName);
    }
};

export default countLiquid;
