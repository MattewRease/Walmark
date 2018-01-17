import axios from 'axios';

export default () => {
    const APIUrl = 'http://localhost:5003/reminders';
    const day = document.querySelector('[data-reminder="day"]');
    const time = document.querySelector('[data-reminder="time"]');
    const setBtn = document.querySelector('[data-reminder="set"]');
    setBtn.disabled = true;
    let selectedDay = 'Select day';
    let selectedTime = 'Select time';

    day.addEventListener('change', (event) => {
        const selectEl = event.target;
        selectedDay = selectEl.value;
        (selectedDay !== 'Select day') && (selectedTime !== 'Select time') ? setBtn.disabled = false : setBtn.disabled = true;
    });

    time.addEventListener('change', (event) => {
        const selectEl = event.target;
        selectedTime = selectEl.value;
        (selectedDay !== 'Select day') && (selectedTime !== 'Select time') ? setBtn.disabled = false : setBtn.disabled = true;
    });

    setBtn.addEventListener('click', postRes);

    function postRes() {
        const noteWrapp = document.createElement('div');
        document.body.appendChild(noteWrapp);
        noteWrapp.className = 'note-wrap';
        axios({
            method: 'post',
            url: APIUrl,
            data: {
                day: selectedDay,
                time: selectedTime
            }
        });
        notify();
    }

    function notify() {
        const noteWrapp = document.querySelector('.note-wrap');
        const note = document.createElement('p');
        noteWrapp.appendChild(note);
        note.className = 'note info';
        setTimeout(() => {
            note.classList.add('active');
            note.innerHTML = 'Reminder set!';
        }, 300);
        setTimeout(() => {
            noteWrapp.removeChild(noteWrapp.firstChild);
        }, 3000);
    }
};
