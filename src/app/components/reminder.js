import axios from 'axios';
import notify from './../base/notify';
import { notes, messages } from './../constants/constants';

export default class Reminder {
    constructor(container) {
        this.container = container;
        this.reminderForm = this.container.querySelector('.js-reminder-form');
        this.reminderApiUrl = this.container.getAttribute('data-apiUrl');
        this.reminderInputs = [...this.container.querySelectorAll('select')];
        this.reminderSetBtn = this.container.querySelector('.js-setReminder');
        this.reminderSetBtn.disabled = true; // disable submit button
        this.inputsValue = [];

        // Event listener for input change
        this.reminderForm.addEventListener('change', this.validate);

        // Event listener for sending data
        this.reminderSetBtn.addEventListener('click', this.setReminder);
    }

    /**
     * Validate selected form on change
     */
    validate = () => {
        const validInputs = this.reminderInputs.filter(reminderInput => reminderInput.value !== '');

        this.enableSubmitButton(validInputs);
    }

    /**
     * Enable submit button if all inputs are valid.
     */
    enableSubmitButton = (validInputs) => {
        if (validInputs.length !== this.reminderInputs.length) {
            this.reminderSetBtn.disabled = true;
        } else {
            // Save value from each input. It doesn't matter how many inputs we have.
            this.reminderInputs.forEach(input => { this.inputsValue.push(input.value); });
            this.reminderSetBtn.disabled = false;
        }
    }

    /**
     * Sending inputs value to JSON server
     */
    setReminder = () => {
        const remind = this.inputsValue;

        axios({
            method: 'post',
            url: this.reminderApiUrl,
            data: {
                remind
            }
        })
            .then(() => {
                notify(`${notes.note} ${notes.info}`, messages.sent); // Will show success alert if success
            })
            .catch(() => {
                notify(`${notes.note} ${notes.warning}`, messages.failed); // Will show error alert if faild
            });
    }
}
