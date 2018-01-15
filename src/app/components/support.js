export default () => {
    const btn = document.querySelectorAll('.health-support__btn');

    for (let i = 0; i < btn.length; i += 1) {
        btn[i].addEventListener('click', () => {
            const selected = btn[i].previousElementSibling;
            const innerSpan = btn[i].querySelector('span');
            const icon = selected.querySelector('svg').classList;
            const iconAll = selected.querySelectorAll('svg');
            selected.classList.toggle('day--no');
            selected.classList.toggle('day--yes');

            for (let j = 0; j < btn.length; j += 1) {
                iconAll[j].classList.toggle('disable');
                progressBar();
            }
            innerSpan.innerHTML === 'Mark' ? innerSpan.innerHTML = 'Unmark' : innerSpan.innerHTML = 'Mark';
        });
    }

    function progressBar() {
        const done = document.querySelectorAll('.day--yes').length;
        document.querySelector('.progress-bar').style.width = `${done * 20}%`;
    }
    progressBar();
};
