import axios from 'axios';
import { task } from './support';

export default () => {
    const APIUrl = 'http://localhost:5003/reminders';
    const day = document.querySelector('[data-reminder="day"]');
    const time = document.querySelector('[data-reminder="time"]');
    const setBtn = document.querySelector('[data-reminder="set"]');
    let selectedDay;
    let selectedTime;

    day.addEventListener('change', () => {
        const selectEl = event.target;
        selectedDay = selectEl.value;
    });

    time.addEventListener('change', () => {
        const selectEl = event.target;
        selectedTime = selectEl.value;
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
    }
};
