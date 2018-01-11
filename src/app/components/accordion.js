export default function () {
    const acc = document.getElementById('accordion');
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
