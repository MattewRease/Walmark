const countLiquid = (container, setLitresData, setOptimalLitresData) => {
    const liquidRate = container.querySelector('.js-liquidRate');
    const liquidLowIcon = container.querySelector('.js-liquidLow');
    const liquidNormalIcon = container.querySelector('.js-liquidNormal');
    const optimalLitres = container.querySelector('.js-liquidOptimal');

    optimalLitres.innerHTML = setOptimalLitresData;

    if (setLitresData < setOptimalLitresData) {
        liquidRate.innerHTML = 'insufficient';
        if (liquidRate.classList.contains('range--hight')) liquidRate.classList.remove('range--hight');
        liquidRate.classList.add('range--low');
        if (liquidNormalIcon.classList.contains('active')) liquidNormalIcon.classList.remove('active');
        liquidLowIcon.classList.add('active');
    } else {
        liquidRate.innerHTML = 'sufficient';
        if (liquidRate.classList.contains('range--low')) liquidRate.classList.remove('range--low');
        liquidRate.classList.add('range--hight');
        if (liquidLowIcon.classList.contains('active')) liquidLowIcon.classList.remove('active');
        liquidNormalIcon.classList.add('active');
    }
};

export default countLiquid;
