export default () => {
    const prevBtn = document.querySelector('.health-support__navigation-prev');
    const nextBtn = document.querySelector('.health-support__navigation-next');
    const calendar = document.querySelector('.health-support__week');

    nextBtn.addEventListener('click', scrollNext);
    prevBtn.addEventListener('click', scrollPrev);
    calendar.onscroll = () => { weekNumber(); };

    function scrollNext() {
        calendar.scrollTop < 650 ? calendar.scrollBy({ top: 643, left: 0, behavior: 'smooth' }) : calendar.scrollBy({ top: 633, left: 0, behavior: 'smooth' });
    }

    function scrollPrev() {
        calendar.scrollTop < 650 ? calendar.scrollBy({ top: -643, left: 0, behavior: 'smooth' }) : calendar.scrollBy({ top: -640, left: 0, behavior: 'smooth' });
    }
    document.getElementById('weekNumder').innerHTML = 'Week 1';

    function weekNumber() {
        if (calendar.scrollTop > 275 && calendar.scrollTop < 937) {
            document.getElementById('weekNumder').innerHTML = 'Week 2';
        } else if (calendar.scrollTop > 938 && calendar.scrollTop < 1594) {
            document.getElementById('weekNumder').innerHTML = 'Week 3';
        } else if (calendar.scrollTop > 1595 && calendar.scrollTop < 2034) {
            document.getElementById('weekNumder').innerHTML = 'Week 4';
        } else if (calendar.scrollTop > 2035) {
            document.getElementById('weekNumder').innerHTML = 'Week 5';
        } else if (calendar.scrollTop < 200) {
            document.getElementById('weekNumder').innerHTML = 'Week 1';
        }
    }
};
