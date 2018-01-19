
export default function historyModal() {
    const firstBtn = document.getElementById('firstHistory');
    const closeBtn = document.querySelector('.history-modal__close');
    const secondBtn = document.getElementById('secondHistory');
    const modalWindow = document.querySelector('.history-modal');
    const content = document.querySelector('.history-modal__content');
    const healthIndex = document.querySelector('.health');
    const copyItem = healthIndex.cloneNode(true);
    const newItem = content.appendChild(copyItem, healthIndex.nextSibling);
    const indexRate = content.querySelector('#rateIndex');

    firstBtn.onclick = () => {
        modalWindow.classList.add('active');
        indexRate.dataset.index = 77;

        // shhhiiiiitttttt

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

        // shhhiiiiitttttt

    };

    modalWindow.onclick = (event) => {
        event.target === modalWindow ? close() : false;

        closeBtn.addEventListener('click', close);

        function close() {
            modalWindow.classList.remove('active');
        }
    };
}
