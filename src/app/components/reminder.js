import axios from 'axios';
import notify from './../base/notify';
import { notes, messages } from './../constants/constants';

export default class Reminder {
    constructor(container) {
        this.container = container;
        this.apiUrl = this.container.getAttribute('data-apiUrl');
        this.day = this.container.querySelector('.js-selectDay');
        this.time = this.container.querySelector('.js-selectTime');
        this.setBtn = this.container.querySelector('.js-setReminder');
        this.setBtn.disabled = true;
        this.selected_day = this.day.value;
        this.selected_time = this.time.value;

        this.day.addEventListener('change', this.selectRemindTime);
        this.time.addEventListener('change', this.selectRemindTime);
        this.setBtn.addEventListener('click', this.setReminder);
    }

    selectRemindTime = (event) => {
        const selectEl = event.target;

        selectEl === this.day ? this.selected_day = selectEl.value : this.selected_time = selectEl.value;

        (this.selected_day !== null && this.selected_day !== 'Select day') && (this.selected_time !== null && this.selected_time !== 'Select time') ? this.setBtn.disabled = false : this.setBtn.disabled = true;
    }

    setReminder = () => {
        const remind = {
            day: this.selected_day,
            time: this.selected_time
        };

        axios({
            method: 'post',
            url: this.apiUrl,
            data: {
                remind
            }
        })
            .then(() => {
                notify(`${notes.note} ${notes.info}`, messages.sent);
            })
            .catch(() => {
                notify(`${notes.note} ${notes.warning}`, messages.failed);
            });
    }
}
