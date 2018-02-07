import nunjucks from 'nunjucks';
import axios from 'axios';
import countProgress from '../base/countProgress';
import notify from './../base/notify';
import { notes, messages } from './../constants/constants';

export default class LoadDataModal {
    constructor(container) {
        this.container = container;
        this.historyButtons = [...document.querySelectorAll('.js-history')];
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

    // handleHistoryDate = (event) => {
    //     console.log(event.currentTarget.dataset.history);
    //     // if (event.currentTarget.dataset.history)
    // }

    requestService = (event) => {
        const handledHistorydate = event.currentTarget.dataset.history;
        axios({
            method: 'get',
            url: `http://localhost:5003/${handledHistorydate}`
        })
            .then((response) => {
                this.openModal();
                this.renderResults(response.data);
            })
            .catch((error) => {
                notify(`${notes.note} ${notes.warning}`, messages.failed);
            });
    }

    renderResults = data => {
        const template = this.nunjEnv.getTemplate('articles.nunj');
        const insertTemplate = template.render({ data });
        this.content.innerHTML = insertTemplate;

        const indexRate = this.container.querySelector('.js-number-index');
        const setRate = indexRate.dataset.index;

        const optimalLitres = this.container.querySelector('.js-liquid-optimal');
        const setOptimalLitresData = optimalLitres.dataset.optimal;

        countProgress(this.container, setRate);
    }

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
