import axios from 'axios';
import notify from './../base/notify';
import { note, info, warning } from './../variables/notes';
import { sent, failed, form } from './../variables/messages';

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
                .then((respons) => {
                    notify(`${note} ${info}`, sent);
                })
                .catch((error) => {
                    notify(`${note} ${warning}`, failed);
                });
        } else {
            notify(`${note} ${info}`, form);
        }
        reviewText.value = '';
    });
};
