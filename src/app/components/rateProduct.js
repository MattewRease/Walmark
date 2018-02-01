import axios from 'axios';
import notify from './../base/notify';
import { notes, messages } from './../constants/constants';

export default class RateProduct {
    constructor(container) {
        this.container = container;
        this.apiUrl = this.container.getAttribute('data-apiUrl');
        this.rateBtn = this.container.querySelector('.rate-product__btn');
        this.reviewText = this.container.querySelector('.rate-product__review');
        this.rateStars = [...this.container.getElementsByClassName('rate-product__input')];
        this.selectedStar;

        this.rateBtn.addEventListener('click', this.reviewData);

        this.rateStars.forEach(rateStar => {
            rateStar.addEventListener('click', () => { this.ratingStars(rateStar); });
        });
    }

    ratingStars = (rateStar) => {
        this.selectedStar = rateStar.value;
    }

    reviewData = () => {
        const review = {
            rate: this.selectedStar,
            text: this.reviewText.value
        };

        if (review.rate !== '' && review.text !== '') {
            axios({
                method: 'post',
                url: this.apiUrl,
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
        this.reviewText.value = '';
    };
}
