import axios from 'axios';
export default () => {
    const APIUrl = 'http://localhost:5003/tasks';
    const messageText = document.querySelector('[data-message="text"]');
    const callBtn = document.querySelector('[data-result="week"]');

    callBtn.addEventListener('click', () => {
        axios({
            method: 'get',
            url: APIUrl,
            responseType: 'stream'
        })
            .then((response) => {
                messageText.innerHTML = response.data.message.text;
            });
    });
};
