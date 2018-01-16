export default () => {
    const shoppingList = document.getElementById('shoppingList');
    const trashBtn = document.querySelector('.shopping-list__trash-icon');
    const item = document.querySelector('.shopping-list__item');
    const title = document.querySelector('.program-length__list--title');
    const list = document.querySelector('.program-length__list-short');

    shoppingList.onclick = () => {
        document.querySelector('.shopping-list').classList.add('active');
    };

    document.querySelector('.shopping-list__close-icon').onclick = () => {
        document.querySelector('.shopping-list').classList.remove('active');
    };

    document.querySelector('[data-program="short"]').onclick = () => {
        const copyItem = item.cloneNode(true);
        const newItem = item.parentNode.insertBefore(copyItem, item.nextSibling);
        newItem.className = 'shopping-list__item--new';
        const noteWrapp = document.createElement('div');

        if (!document.querySelector('.note-wrap')) {
            document.body.appendChild(noteWrapp);
            noteWrapp.className = 'note-wrap';
        } else {
            false;
        }

        addContent();
        notify();
    };

    function addContent() {
        const newItem = document.querySelector('.shopping-list__item--new');
        const copyList = list.cloneNode(true);
        newItem.childNodes[1].innerHTML += title.textContent;
        newItem.childNodes[5].appendChild(copyList);

        document.querySelector('.shopping-list__item--new').onclick = (event) => {
            const newItem = document.querySelector('.shopping-list__item--new');
            let target = event.target;
            while (target !== this) {
                if (target.tagName === 'svg') {
                    target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
                    return;
                }
                target = target.parentNode;
            }
        };
    }

    function notify() {
        const noteWrapp = document.querySelector('.note-wrap');
        const note = document.createElement('p');
        noteWrapp.appendChild(note);
        note.className = 'note';
        bought();

        function bought() {
            setTimeout(() => {
                note.classList.add('active');
                note.innerHTML = 'Program added to your shopping list!';
            }, 300);
            setTimeout(() => {
                console.log(noteWrapp);
                noteWrapp.removeChild(noteWrapp.lastChild);
            }, 3000);
        }
    }
};
