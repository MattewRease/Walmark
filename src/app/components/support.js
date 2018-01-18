import axios from 'axios';

export default () => {
    const btn = document.querySelectorAll('.health-support__btn');
    const APIUrl = 'http://localhost:5003/tasks';
    const messageText = document.querySelector('[data-message="text"]');
    const callBtn = document.querySelector('[data-result="week"]');

    const task = {
        id: '',
        text: ''
    };

    for (let i = 0; i < btn.length; i += 1) {
        btn[i].addEventListener('click', () => {
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

            innerSpan.innerHTML === 'Mark' ? innerSpan.innerHTML = 'Unmark' : innerSpan.innerHTML = 'Mark';

            innerSpan.innerHTML === 'Unmark' ? notify() : false;

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

    function postRes() {
        const noteWrapp = document.createElement('div');
        document.body.appendChild(noteWrapp);
        noteWrapp.className = 'note-wrap';

        axios({
            method: 'post',
            url: APIUrl,
            data: {
                task
            }
        });
    }

    function notify() {
        const noteWrapp = document.querySelector('.note-wrap');
        const note = document.createElement('p');
        const newNote = document.querySelector('.note');

        newNote ? noteWrapp.insertBefore(note, newNote) : noteWrapp.appendChild(note);
        note.className = 'note success';
        setTimeout(() => {
            note.classList.add('active');
            note.innerHTML = 'Congratulation!';
        }, 300);
        setTimeout(() => {
            noteWrapp.removeChild(noteWrapp.lastChild);
        }, 3000);
    }

    progressBar();
};
