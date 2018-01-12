export default () => {
    const prevBtn = document.querySelector('.health-support__navigation-prev');
    const nextBtn = document.querySelector('.health-support__navigation-next');
    const calendar = document.querySelector('.health-support__week');

    nextBtn.addEventListener('click', scrollNext);
    prevBtn.addEventListener('click', scrollPrev);

    function scrollNext(e) {
        if (calendar.scrollTop < 650) {
            calendar.scrollBy({ top: 643, left: 0, behavior: 'smooth' });
        } else {
            calendar.scrollBy({ top: 633, left: 0, behavior: 'smooth' });

        }
    }

    function scrollPrev(e) {
        if (calendar.scrollTop < 650) {
            calendar.scrollBy({ top: -643, left: 0, behavior: 'smooth' });
        } else {
            calendar.scrollBy({ top: -640, left: 0, behavior: 'smooth' });

        }
    }
};
