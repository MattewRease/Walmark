import axios from 'axios';
import notify from './../base/notify';
import { notes, messages } from './../constants/constants';

export default class Reminder {
    constructor(container) {
        this.container = container;
        this.form = this.container.querySelector('.health-support__form');
        this.apiUrl = this.container.getAttribute('data-apiUrl');
        this.selectors = [...this.container.querySelectorAll('select')];
        this.day = this.container.querySelector('.js-selectDay');
        this.time = this.container.querySelector('.js-selectTime');
        this.setBtn = this.container.querySelector('.js-setReminder');
        this.setBtn.disabled = true;
        this.selectedDay = this.day.value;
        this.selectedTime = this.time.value;
        this.selectorsValue;

        this.form.addEventListener('change', this.validate);
        this.setBtn.addEventListener('click', this.setReminder);
    }

    validate = (event) => {
        const field = event.target;

        this.selectorsValue = field.value;

        this.selectors.forEach(selector => {
            this.selectorsValue = selector.value;
        });

        this.disableBtn();
    }

    disableBtn = () => {

        if (this.selectorsValue === '0') {
            this.setBtn.disabled = true;
        } else {
            this.setBtn.disabled = false;
        }
    }

    setReminder = () => {
        const remind = {
            day: this.selectedDay,
            time: this.selectedTime
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
