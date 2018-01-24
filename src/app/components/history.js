
export default function historyModal() {
    const firstBtn = document.querySelector('.js-firstHistory');
    const closeBtn = document.querySelector('.history-modal__close');
    const secondBtn = document.querySelector('.js-secondHistory');
    const modalWindow = document.querySelector('.history-modal');
    const content = document.querySelector('.history-modal__content');
    const healthIndex = document.querySelector('.health');
    const comparison = document.querySelector('.comparison');
    const copyIndexItem = healthIndex.cloneNode(true);
    const copyComparisonItem = comparison.cloneNode(true);
    const newIndexItem = content.appendChild(copyIndexItem, healthIndex.nextSibling);
    const newComparisonItem = content.appendChild(copyComparisonItem, comparison.nextSibling);
    const indexRate = content.querySelector('.js-numberIndex');

    firstBtn.addEventListener('click', () => {
        modalWindow.classList.add('active');
        indexRate.dataset.index = 7;
        countIndex();
    });

    secondBtn.addEventListener('click', () => {
        modalWindow.classList.add('active');
        indexRate.dataset.index = 77;
        countIndex();
    });

    function countIndex() {
        const arrow = content.querySelector('#rateArrow');
        const bg = content.querySelector('#rateBg');
        const rateChange = `rotate(${indexRate.dataset.index * 1.8}deg)`;
        indexRate.innerHTML = (indexRate.dataset.index);

        if (indexRate.dataset.index < 0 || indexRate.dataset.index > 100) {
            alert('bad range');
        } else {
            arrow.style.transform = rateChange;
            bg.style.transform = rateChange;

            if (indexRate.dataset.index < 31) {
                indexRate.classList.add('range--low');
            } else if (indexRate.dataset.index < 70) {
                indexRate.classList.add('range--middle');
            } else {
                indexRate.classList.add('range--hight');
            }
        }
    }

    modalWindow.onclick = (event) => {
        event.target === modalWindow ? close() : false;

        closeBtn.addEventListener('click', close);

        function close() {
            modalWindow.classList.remove('active');
        }
    };
}
