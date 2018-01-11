export default () => {
    const liquid = document.getElementById('liquidRate');
    const litres = document.querySelector('.health__litres');

    if (litres.dataset.liquid < 2.5) {
        liquid.innerHTML = 'insufficient';
        liquid.classList.add('range--low');
    } else {
        liquid.innerHTML = 'sufficient';
        liquid.classList.add('range--hight');
    }
};
