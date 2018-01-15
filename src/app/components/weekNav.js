export default () => {
    const prevBtn = document.querySelector('.health-support__navigation-prev');
    const nextBtn = document.querySelector('.health-support__navigation-next');
    const calendar = document.querySelector('.health-support__week');
    const days = document.querySelectorAll('.health-support__day');
    const myArray = Array.from(days);
    const newSelect = myArray.slice(7);
    let i = 0;

    for (let i = 0; i < myArray.length; i += 7) {
        myArray[i].dataset.day = 'monday';
    }


    const monday = calendar.querySelectorAll('[data-day="monday"]');
    const mondays = Array.from(monday);
    let param;

    nextBtn.addEventListener('click', nextMonday);
    prevBtn.addEventListener('click', prevMonday);

    function nextMonday() {
        if (i < mondays.length - 1) {
            i += 1;
        } else if (i === mondays.length - 1) {
            i = 0;
        }
        const topPos = mondays[i].offsetTop;
        calendar.scrollTop = topPos - 220;
    }

    function prevMonday() {
        if (i > 0) {
            i -= 1;
        } else if (i === 0) {
            i = mondays.length - 1;
        }
        const topPos = mondays[i].offsetTop;
        calendar.scrollTop = topPos - 220;
    }

    // function nextMonday() {
    //     mondays[i].scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    //     i += 1;
    //     if (i === mondays.length) {
    //         i = 0;
    //     }
    // }
    // window.scrollBy({ top: -240, left: 0, behavior: 'smooth' });
    // nextBtn.addEventListener('click', scrollNext);
    // prevBtn.addEventListener('click', scrollPrev);
    // calendar.onscroll = () => { weekNumber(); };


    // function scrollNext() {
    //     if (window.innerWidth < 740) {
    //         if (calendar.scrollTop < 1235) {
    //             calendar.scrollBy({ top: 1240, left: 0, behavior: 'smooth' });
    //         } else {
    //             calendar.scrollBy({ top: 948, left: 0, behavior: 'smooth' });
    //         }
    //     } else {
    //         if (calendar.scrollTop < 650) {
    //             calendar.scrollBy({ top: 643, left: 0, behavior: 'smooth' });
    //         } else {
    //             calendar.scrollBy({ top: 640, left: 0, behavior: 'smooth' });
    //         }
    //     }
    // }

    // function scrollPrev() {
    //     if (window.innerWidth < 740) {
    //         if (calendar.scrollTop < 1235) {
    //             calendar.scrollBy({ top: -1240, left: 0, behavior: 'smooth' });
    //         } else {
    //             calendar.scrollBy({ top: -948, left: 0, behavior: 'smooth' });
    //         }
    //     } else {
    //         if (calendar.scrollTop < 650) {
    //             calendar.scrollBy({ top: -643, left: 0, behavior: 'smooth' });
    //         } else {
    //             calendar.scrollBy({ top: -640, left: 0, behavior: 'smooth' });
    //         }
    //     }
    // }
    // document.getElementById('weekNumder').innerHTML = 'Week 1';

    // function weekNumber() {
    //     if (window.innerWidth < 768) {
    //         console.log(calendar.scrollTop);
    //         if (calendar.scrollTop > 750 && calendar.scrollTop < 1858) {
    //             document.getElementById('weekNumder').innerHTML = 'Week 2';
    //         } else if (calendar.scrollTop > 938 && calendar.scrollTop < 1594) {
    //             document.getElementById('weekNumder').innerHTML = 'Week 3';
    //         } else if (calendar.scrollTop > 1595 && calendar.scrollTop < 2034) {
    //             document.getElementById('weekNumder').innerHTML = 'Week 4';
    //         } else if (calendar.scrollTop > 2035) {
    //             document.getElementById('weekNumder').innerHTML = 'Week 5';
    //         } else if (calendar.scrollTop < 200) {
    //             document.getElementById('weekNumder').innerHTML = 'Week 1';
    //         }
    //     }

    //     if (window.innerWidth > 768) {
    //         if (calendar.scrollTop > 275 && calendar.scrollTop < 937) {
    //             document.getElementById('weekNumder').innerHTML = 'Week 2';
    //         } else if (calendar.scrollTop > 938 && calendar.scrollTop < 1594) {
    //             document.getElementById('weekNumder').innerHTML = 'Week 3';
    //         } else if (calendar.scrollTop > 1595 && calendar.scrollTop < 2034) {
    //             document.getElementById('weekNumder').innerHTML = 'Week 4';
    //         } else if (calendar.scrollTop > 2035) {
    //             document.getElementById('weekNumder').innerHTML = 'Week 5';
    //         } else if (calendar.scrollTop < 200) {
    //             document.getElementById('weekNumder').innerHTML = 'Week 1';
    //         }
    //     }
    // }
};
