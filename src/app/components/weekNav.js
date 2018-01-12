export default () => {
    const prevBtn = document.querySelector('.health-support__navigation-prev');
    const nextBtn = document.querySelector('.health-support__navigation-next');
    const days = document.querySelectorAll('.health-support__day');
    const calendar = document.querySelector('.health-support__week');
    const week = calendar.querySelector('.targetDay');


    nextBtn.addEventListener('click', scrollNext);
    prevBtn.addEventListener('click', scrollPrev);

    function scrollNext(e) {
        if (calendar.scrollTop < 650) {
            week.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            calendar.scrollTop += 633;

        }
    }

    function scrollPrev(e) {
        if (calendar.scrollTop < 650) {
            calendar.scrollTop -= 643;
        } else {
            calendar.scrollTop -= 643;

        }
    }
};
