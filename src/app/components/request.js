import axios from 'axios';
import { task } from './support';

export default () => {
    const APIUrl = 'http://localhost:5003/tasks';
    const messageText = document.querySelector('[data-message="text"]');
    const callBtn = document.querySelector('[data-result="week"]');

    callBtn.addEventListener('click', postRes);

    function postRes() {
        axios({
            method: 'post',
            url: APIUrl,
            data: {
                id: '1',
                text: 'sucessfully'
            }
        });
    }
};
