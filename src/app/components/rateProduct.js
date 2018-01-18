import axios from 'axios';

export default () => {
    const APIUrl = 'http://localhost:5003/rating';
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

        axios({
            method: 'post',
            url: APIUrl,
            data: {
                review
            }
        });
    });
};
