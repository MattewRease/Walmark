import nunjucks from 'nunjucks';
import axios from 'axios';
import countProgress from '../base/countProgress';
import notify from './../base/notify';
import { notes, messages, paths } from './../constants/constants';

export default class getModalData {
    constructor(container) {
        this.container = container;
        this.modalCloseButton = this.container.querySelector('.js-history-modal-close');
        this.modalContent = this.container.querySelector('.js-history-modal-content');
        this.modalWindow = document.querySelector('.js-history-modal');
        this.historyButtons = [...document.querySelectorAll('.js-history')]; // select all history buttons

        // get name of template to render
        this.nunjEnv = nunjucks.configure(paths.nunjTemplates);

        // Open modal window by click on history button
        this.historyButtons.forEach(historyButton => {
            historyButton.addEventListener('click', this.requestService);
        });

        // Close modal window by click close button
        this.modalCloseButton.addEventListener('click', this.closeHistoryModalWindow);

        // Close modal Window by click window except modal content
        this.modalWindow.addEventListener('click', this.handleClickModal);
    }

    // get request with data
    requestService = (event) => {
        const handledHistoryDate = event.currentTarget.dataset.history;

        axios({
            method: 'get',
            url: 'http://localhost:5003/history' // get json data
        })
            .then((response) => {
                this.defineSpecificDate(response.data, handledHistoryDate);
                this.openModal();
            })
            .catch((error) => {
                notify(`${notes.note} ${notes.warning}`, messages.failed); // show error if failed
            });
    }

    // define selected date
    defineSpecificDate = (data, handledHistoryDate) => {

        /**
         * find object with specific date from array.
         *
         * Will return array with one object.
         */
        const myDate = data.filter(selectDate => {
            return selectDate.date === handledHistoryDate;
        });

        const dataSelectedDate = myDate[0]; // select object from received array
        this.renderResults(dataSelectedDate); // render template with received data
    }

    // Rendering temlate on the page
    renderResults = dataSelectedDate => {
        const template = this.nunjEnv.getTemplate('history.nunj');
        const insertTemplate = template.render(dataSelectedDate);
        this.modalContent.innerHTML = insertTemplate;

        const indexRate = this.container.querySelector('.js-number-index');
        const setRate = indexRate.dataset.index;

        countProgress(this.container, setRate); // Count progress index depends to history data
    }

    // Open modal window
    openModal = () => {
        this.container.classList.add('active');
    }

    // handle outside click
    handleClickModal = (event) => {
        event.target === this.modalWindow ? this.closeHistoryModalWindow() : false;
    }

    // close modal window
    closeHistoryModalWindow = () => {
        this.modalWindow.classList.remove('active');
    }
}
