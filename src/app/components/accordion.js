export default function () {
    const acc = document.querySelector('.js-accordion');
    const block = document.querySelector('.footer__list');
    let selectedPanel;

    acc.onclick = (event) => {
        const target = event.target;
        if (target.dataset.accordion === 'title') {
            toggle(target);
        }
    };

    function toggle(panel) {

        if (selectedPanel) {
            selectedPanel.parentElement.lastElementChild.classList.remove('active');
            selectedPanel.querySelector('.footer__dropdown-icon').classList.remove('up');
        }
        selectedPanel = panel;
        selectedPanel.parentElement.lastElementChild.classList.add('active');
        selectedPanel.querySelector('.footer__dropdown-icon').classList.add('up');
    }
}

// export default class Accordion {
//     constructor(container) {
//         this.container = container;
//         this.acc = this.container.querySelector('.js-accordion');
//         this.block = this.container.querySelector('.footer__list');
//         this.acc.addEventListener('click', this.select);
//         this.selectedPanel;
//     }

//     select(event) {
//         const target = event.target;
//         if (target.dataset.accordion === 'title') {
//             this.toggle();
//         }
//     }

//     toggle() {
//         console.log('asdas');
//     }
// }
