import axios from 'axios';
import notify from './../base/notify';
import { notes } from './../constants/notes';
import { messages } from './../constants/messages';

export default class RateProduct {
    constructor(container) {
        this.container = container;
        this.APIURl = 'http://localhost:5003/rating';
        this.rateBtn = this.container.querySelector('.rate-product__btn');
        this.reviewText = this.container.querySelector('.rate-product__input');
        this.rateStars = Array.from(this.container.querySelectorAll('.rate-product__star-icon'));
        this.selectedStar;
        this.ratingStars();
        this.rateBtn.addEventListener('click', this.sendRreview);
    }

    ratingStars = () => {
        this.rateStars.forEach(rateStar => {
            rateStar.addEventListener('click', () => {
                console.log(rateStar.value);
                this.selectedStar = rateStar.value;
            });
        });
    }

    sendRreview = () => {
        const review = {
            rate: this.selectedStar,
            text: this.reviewText.value
        };

        if (review.rate !== '' && review.text !== '') {
            axios({
                method: 'post',
                url: this.APIURl,
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
