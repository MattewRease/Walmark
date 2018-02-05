import nunjucks from 'nunjucks';
import axios from 'axios';

export default class LoadDataModal {
    constructor(container) {
        this.container = container;
        this.firstBtn = document.querySelector('.js-firstHistory');

        this.renderContainer = this.container.querySelector('.js-firstHistory');
        this.nunjEnv = nunjucks.configure('//localhost:5001', { autoescape: false });
        this.firstBtn.addEventListener('click', this.requestService);
    }

    requestService = () => {
        axios({
            method: 'get'
        })
            .then((response) => {
                this.renderResults(response.data);
            })
            .catch((error) => {
                this.renderResults();
                console.error('error');
            });
    }

    renderResults = data => {

        const template = this.nunjEnv.getTemplate('articles.nunj');
        this.container.innerHTML = template.render({ data });
    }
}
