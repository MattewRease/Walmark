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
        const noteWrapp = document.createElement('div');
        document.body.appendChild(noteWrapp);
        noteWrapp.className = 'note-wrap';
        const review = {
            rate: selectedStar,
            text: reviewText.value
        };

        if (review.rate !== '' && review.text !== '') {
            axios({
                method: 'post',
                url: APIUrl,
                data: {
                    review
                }
            });
            notify();
        } else {
            notifyWarning();
        }
        reviewText.value = '';
        function notify() {
            const noteWrapp = document.querySelector('.note-wrap');
            const note = document.createElement('p');
            const newNote = document.querySelector('.note');

            newNote ? noteWrapp.insertBefore(note, newNote) : noteWrapp.appendChild(note);

            note.className = 'note info';
            setTimeout(() => {
                note.classList.add('active');
                note.innerHTML = 'Your review has been sent!';
            }, 300);
            setTimeout(() => {
                noteWrapp.removeChild(noteWrapp.firstChild);
            }, 3000);
        }

        function notifyWarning() {
            const noteWrapp = document.querySelector('.note-wrap');
            const note = document.createElement('p');
            const newNote = document.querySelector('.note');

            newNote ? noteWrapp.insertBefore(note, newNote) : noteWrapp.appendChild(note);

            note.className = 'note warning';
            setTimeout(() => {
                note.classList.add('active');
                note.innerHTML = 'Failed! Fill the Form!';
            }, 300);
            setTimeout(() => {
                noteWrapp.removeChild(noteWrapp.firstChild);
            }, 3000);
        }
    });
};
