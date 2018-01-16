export default () => {
    const prevBtn = document.querySelector('.health-support__navigation-prev');
    const nextBtn = document.querySelector('.health-support__navigation-next');
    const calendar = document.querySelector('.health-support__week');
    const days = document.querySelectorAll('.health-support__day');
    const myArray = Array.from(days);
    const newSelect = myArray.slice(7);
    const count = document.getElementById('weekNumder');
    let i = 0;
    let w = 1;

    for (let i = 0; i < myArray.length; i += 7) {
        myArray[i].dataset.day = 'monday';
    }

    const monday = calendar.querySelectorAll('[data-day="monday"]');
    const mondays = Array.from(monday);
    let param;
    count.innerHTML = `Week ${w}`;

    nextBtn.addEventListener('click', nextMonday);
    prevBtn.addEventListener('click', prevMonday);

    function nextMonday() {
        if (i < mondays.length - 1) {
            i += 1;
            w += 1;
            count.innerHTML = `Week ${w}`;
        } else if (i === mondays.length - 1) {
            i = 0;
            w = 1;
            count.innerHTML = `Week ${w}`;
        }
        const topPos = mondays[i].offsetTop;
        calendar.scrollTop = topPos - 220;
    }

    function prevMonday() {
        if (i > 0) {
            i -= 1;
            w -= 1;
            count.innerHTML = `Week ${w}`;
        } else if (i === 0) {
            i = mondays.length - 1;
            w = mondays.length;
            count.innerHTML = `Week ${w}`;
        }
        const topPos = mondays[i].offsetTop;
        calendar.scrollTop = topPos - 220;
    }

    // calendar.onscroll = () => { weekNumber(); };

    // function weekNumber() {
    //     if (window.innerWidth < 768) {
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
    //         console.log(calendar.scrollTop);
    //         if (calendar.scrollTop > 644 && calendar.scrollTop < 1372) {
    //             w = 2;
    //             i = 2;
    //             count.innerHTML = `Week ${w}`;
    //         } else if (calendar.scrollTop > 1371 && calendar.scrollTop < 2101) {
    //             w = 3;
    //             i = 3;
    //             count.innerHTML = `Week ${w}`;
    //         } else if (calendar.scrollTop > 2100 && calendar.scrollTop < 2829) {
    //             w = 4;
    //             i = 4;
    //             count.innerHTML = `Week ${w}`;
    //         } else if (calendar.scrollTop > 2828) {
    //             w = 5;
    //             i = 5;
    //             count.innerHTML = `Week ${w}`;
    //         } else if (calendar.scrollTop < 643) {
    //             w = 1;
    //             i = 1;
    //             count.innerHTML = `Week ${w}`;
    //         }
    //     }
    // }
};
