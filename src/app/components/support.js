import axios from 'axios';
import notify from './../base/notify';
import { note, success, warning } from './../variables/notes';
import { congratz, failed } from './../variables/messages';

export default () => {
    const btn = document.querySelectorAll('.health-support__btn');
    const APIURl = 'http://localhost:5003/tasks';
    const messageText = document.querySelector('[data-message="text"]');
    const iconCross = document.querySelector('.health-support__day--cross');
    const dayText = document.querySelector('[data-message="text"]');

    const task = {
        id: '',
        text: ''
    };

    for (let i = 0; i < btn.length; i += 1) {
        btn[i].addEventListener('click', () => {
            const selected = btn[i].previousElementSibling;
            const innerSpan = btn[i].querySelector('span');
            const iconAll = selected.querySelectorAll('svg');
            const dataId = selected.parentNode.dataset.id;

            if (selected.classList.contains('day--sunday')) {
                selected.classList.remove('day--sunday');
                const cloneCross = iconCross.cloneNode(true);
                dayText.parentNode.appendChild(cloneCross);
                dayText.remove();
                selected.classList.add('day--no');
                document.querySelector('.health-support__btn--done').remove();
                document.querySelector('[data-btn="disable"]').classList.remove('disable');
                postResult();
            }

            selected.classList.toggle('day--no');
            selected.classList.toggle('day--yes');

            if (selected.classList.contains('day--yes')) {
                task.id = dataId;
                task.text = 'successfully';
            } else {
                task.id = dataId;
                task.text = 'unsuccessfully';
            }

            progressBar();
            postResult();

            innerSpan.innerHTML === 'Mark' ? innerSpan.innerHTML = 'Unmark' : innerSpan.innerHTML = 'Mark';
            innerSpan.innerHTML === 'Unmark' ? notify(`${note} ${success}`, congratz) : false;

            iconAll[0].classList.toggle('disable');
            iconAll[1].classList.toggle('disable');
        });
    }

    function progressBar() {
        const done = document.querySelectorAll('.day--yes').length;
        document.querySelector('.progress-bar').style.width = `${done * 17}%`;
    }

    function postResult() {
        axios({
            method: 'post',
            url: APIURl,
            data: {
                task
            }
        })
            .catch(() => {
                notify(`${note} ${warning}`, failed);
            });
    }
    progressBar();
};
