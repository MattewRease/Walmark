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
        this.SELECTEDDAY = 'Select day';
        this.SELECTEDTIME = 'Select time';

        this.day.addEventListener('change', this.selectDay);
        this.time.addEventListener('change', this.selectTime);
        this.setBtn.addEventListener('click', this.setReminder);
    }

    selectDay = (event) => {
        const selectEl = event.target;
        this.SELECTEDDAY = selectEl.value;

        (this.SELECTEDDAY !== 'Select day') && (this.SELECTEDTIME !== 'Select time') ? this.setBtn.disabled = false : this.setBtn.disabled = true;
    }

    selectTime = (event) => {
        const selectEl = event.target;
        this.SELECTEDTIME = selectEl.value;

        (this.SELECTEDDAY !== 'Select day') && (this.SELECTEDTIME !== 'Select time') ? this.setBtn.disabled = false : this.setBtn.disabled = true;
    }

    setReminder = () => {
        const remind = {
            day: this.SELECTEDDAY,
            time: this.SELECTEDTIME
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
