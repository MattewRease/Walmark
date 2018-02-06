import nunjucks from 'nunjucks';
import axios from 'axios';
import countProgress from '../base/countProgress';
import countLiquid from '../base/countLiquid';

export default class LoadDataModal {
    constructor(container) {
        this.container = container;
        this.firstBtn = document.querySelector('.js-first-history');
        this.title = this.container.querySelector('h3');
        this.modalCloseButton = this.container.querySelector('.js-history-modal-close');
        this.content = this.container.querySelector('.history-modal__history');
        this.modalWindow = document.querySelector('.history-modal');
        const jsTemplates = 'http://localhost:5001/js/templates';
        this.renderContainer = this.container.querySelector('.js-first-history');
        this.nunjEnv = nunjucks.configure(jsTemplates);
        this.firstBtn.addEventListener('click', this.openModal);

        // Close modal window by click close button
        this.modalCloseButton.addEventListener('click', this.closeHistoryModalWindow);

        // Close modal Window by click window except modal content
        this.modalWindow.addEventListener('click', this.handleClickModal);
    }

    requestService = () => {
        axios({
            method: 'get',
            url: 'http://localhost:5003/articles'
        })
            .then((response) => {
                this.renderResults(response.data);
            })
            .catch((error) => {
                console.error('error');
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
        countLiquid(this.container, setOptimalLitresData);
    }

    openModal = () => {
        this.container.classList.add('active');
        this.requestService();

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
