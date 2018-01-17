import axios from 'axios';

export default () => {
    const btn = document.querySelectorAll('.health-support__btn');
    const APIUrl = 'http://localhost:5003/tasks';
    const messageText = document.querySelector('[data-message="text"]');
    const callBtn = document.querySelector('[data-result="week"]');

    for (let i = 0; i < btn.length; i += 1) {
        btn[i].addEventListener('click', () => {

            const task = {
                id: '1232',
                text: '12323'
            };

            const selected = btn[i].previousElementSibling;
            const innerSpan = btn[i].querySelector('span');
            const icon = selected.querySelector('svg').classList;
            const iconAll = selected.querySelectorAll('svg');
            const dataId = selected.parentNode.dataset.id;
            selected.classList.toggle('day--no');
            selected.classList.toggle('day--yes');

            if (selected.classList.contains('day--yes')) {
                task.id = dataId;
                task.text = 'successfully';
            } else {
                task.id = dataId;
                task.text = 'unsuccessfully';
            }
            postRes();
            document.querySelectorAll('.health-support__day--complete');
            function postRes() {

                axios({
                    method: 'post',
                    url: APIUrl,
                    data: {
                        task
                    }
                });
            }
            innerSpan.innerHTML === 'Mark' ? innerSpan.innerHTML = 'Unmark' : innerSpan.innerHTML = 'Mark';

            for (let j = 0; j < btn.length; j += 1) {
                iconAll[j].classList.toggle('disable');
                progressBar();
            }
        });
    }

    function progressBar() {
        const done = document.querySelectorAll('.day--yes').length;
        document.querySelector('.progress-bar').style.width = `${done * 20}%`;
    }
    progressBar();
};
