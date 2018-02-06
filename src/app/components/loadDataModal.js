import nunjucks from 'nunjucks';
import axios from 'axios';
import countProgress from '../base/countProgress';

export default class LoadDataModal {
    constructor(container) {
        this.container = container;
        this.firstBtn = document.querySelector('.js-firstHistory');
        this.title = this.container.querySelector('h3');
        this.closeBtn = this.container.querySelector('.history-modal__close');
        this.content = this.container.querySelector('.history-modal__history');
        this.modalWindow = document.querySelector('.history-modal');
        const jsTemplates = 'http://localhost:5001/js/templates';
        this.renderContainer = this.container.querySelector('.js-firstHistory');
        this.nunjEnv = nunjucks.configure(jsTemplates);
        this.firstBtn.addEventListener('click', this.openModal);
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
    }

    openModal = () => {
        this.container.classList.add('active');
        this.requestService();

        this.closeBtn.addEventListener('click', () => {
            this.closeBtn ? this.close() : false;
        });
        this.modalWindow.addEventListener('click', () => {
            event.target === this.modalWindow ? this.close() : false;
        });
    }

    close = () => {
        this.modalWindow.classList.remove('active');
    }
}
