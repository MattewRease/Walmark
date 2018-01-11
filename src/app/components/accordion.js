export default function () {
    const acc = document.getElementById('accordion');
    const block = document.querySelector('.footer__list');
    let selectedPanel;

    acc.onclick = (event) => {
        const target = event.target;
        if (target.dataset.accordion !== 'title') return;
        toggle(target);
    };

    function toggle(panel) {

        if (selectedPanel) {
                block.classList.remove('active');
                block.classList.add('disable');
            } else {
            selectedPanel = panel;
                block.classList.remove('disable');
                selectedPanel.ul.classList.add('active');
        }
    }
    }
