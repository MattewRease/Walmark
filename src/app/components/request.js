import axios from 'axios';
import notify from './../base/notify';
import { note, info } from './../variables/notes';
import { sent } from './../variables/messages';

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
        axios({
            method: 'post',
            url: APIUrl,
            data: {
                day: selectedDay,
                time: selectedTime
            }
        });
        notify(`${note} ${info}`, sent);
    }
};
