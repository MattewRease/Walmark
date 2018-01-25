import axios from 'axios';
import notify from './../base/notify';
import { notes } from './../constants/notes';
import { messages } from './../constants/messages';

export default () => {
    const APIURl = 'http://localhost:5003/rating';
    const rateBtn = document.querySelector('.rate-product__btn');
    const reviewText = document.querySelector('.rate-product__input');
    const rateStars = document.querySelectorAll('.rate-product__star-icon');
    let selectedStar;
    let i;

    for (i = 0; i < rateStars.length; i += 1) {
        rateStars[i].addEventListener('click', selectRate);
    }

    function selectRate() {
        selectedStar = this.value;
    }

    rateBtn.addEventListener('click', () => {
        const review = {
            rate: selectedStar,
            text: reviewText.value
        };

        if (review.rate !== '' && review.text !== '') {
            axios({
                method: 'post',
                url: APIURl,
                data: {
                    review
                }
            })
                .then(() => {
                    notify(`${notes.note} ${notes.info}`, messages.sent);
                })
                .catch(() => {
                    notify(`${notes.note} ${notes.warning}`, messages.failed);
                });
        } else {
            notify(`${notes.note} ${notes.info}`, messages.form);
        }
        reviewText.value = '';
    });
};
