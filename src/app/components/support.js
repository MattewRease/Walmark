export default () => {
    const btn = document.querySelectorAll('.health-support__btn');

    for (let i = 0; i < btn.length; i += 1) {
        btn[i].addEventListener('click', () => {
            const selected = btn[i].previousElementSibling;
            const innerSpan = btn[i].querySelector('span');
            const icon = selected.querySelector('svg').classList;
            const iconTick = selected.querySelector('.health-support__day--tick');
            const iconCross = selected.querySelector('.health-support__day--cross');
            const iconAll = selected.querySelectorAll('svg');

            selected.classList.toggle('day--no');
            selected.classList.toggle('day--yes');
            icon.toggle('health-support__day--tick');
            icon.toggle('health-support__day--cross');
            innerSpan.innerHTML === 'Mark' ? innerSpan.innerHTML = 'Unmark' : innerSpan.innerHTML = 'Mark';
            procent();
            for (let j = 0; j < btn.length; j += 1) {
                iconAll[j].classList.toggle('disable');
            }
        });
    }

    function procent() {
        const done = document.querySelectorAll('.day--yes').length;
        return document.querySelector('.progress-bar').style.width = (done * 20) + '%';
    }
    procent();
};
