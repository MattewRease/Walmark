import nunjucks from 'nunjucks';
import axios from 'axios';
import countProgress from '../base/countProgress';
import notify from './../base/notify';
import { notes, messages } from './../constants/constants';

export default class LoadDataModal {
    constructor(container) {
        this.container = container;
        this.historyButtons = [...document.querySelectorAll('.js-history')]; // select all history buttons
        this.title = this.container.querySelector('h3');
        this.modalCloseButton = this.container.querySelector('.js-history-modal-close');
        this.content = this.container.querySelector('.history-modal__history');
        this.modalWindow = document.querySelector('.history-modal');
        const jsTemplates = 'http://localhost:5001/js/templates';
        this.renderContainer = this.container.querySelector('.js-first-history');
        this.nunjEnv = nunjucks.configure(jsTemplates);

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
            url: `http://localhost:5003/${handledHistoryDate}` // get exactly the data that we chose by click
        })
            .then((response) => {
                this.openModal();
                this.renderResults(response.data); // render template with received data if success
            })
            .catch((error) => {
                notify(`${notes.note} ${notes.warning}`, messages.failed); // show error if failed
            });
    }

    // Rendering temlate on the page
    renderResults = data => {
        const template = this.nunjEnv.getTemplate('articles.nunj');
        const insertTemplate = template.render({ data });
        this.content.innerHTML = insertTemplate;

        const indexRate = this.container.querySelector('.js-number-index');
        const setRate = indexRate.dataset.index;

        countProgress(this.container, setRate);
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
