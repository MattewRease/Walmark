import notify from './../base/notify';
import { notes, messages } from './../constants/constants';

export default () => {
    const shoppingList = document.querySelector('.js-shoppingList');
    const trashBtn = document.querySelector('.shopping-list__trash-icon');
    const item = document.querySelector('.shopping-list__item');
    const title = document.querySelector('.program-length__list--title');
    const titleLong = document.querySelector('.program-length__list-long--title');
    const list = document.querySelector('.program-length__list-short');
    const listLong = document.querySelector('.program-length__list-long');

    shoppingList.onclick = () => {
        document.querySelector('.shopping-list').classList.add('active');
    };

    document.querySelector('.shopping-list__close-icon').onclick = () => {
        document.querySelector('.shopping-list').classList.remove('active');
    };

    document.querySelector('[data-program="short"]').onclick = () => {
        addToShop();
        addContentShort();
        notEmpty();
    };

    document.querySelector('[data-program="long"]').onclick = () => {
        addToShop();
        addContentLong();
        notEmpty();
    };

    function addToShop() {
        const copyItem = item.cloneNode(true);
        const newItem = item.parentNode.insertBefore(copyItem, item.nextSibling);
        newItem.className = 'shopping-list__item--new';

        notify(notes.note, messages.buy);
    }

    function addContentShort() {
        const newItem = document.querySelector('.shopping-list__item--new');
        const copyList = list.cloneNode(true);
        newItem.childNodes[1].innerHTML += title.textContent;
        newItem.childNodes[5].appendChild(copyList);
        newItem.onclick = (event) => {
            deleteItem();
        };
    }

    function addContentLong() {
        const newItem = document.querySelector('.shopping-list__item--new');
        const copyList = listLong.cloneNode(true);
        newItem.childNodes[1].innerHTML += titleLong.textContent;
        newItem.childNodes[5].appendChild(copyList);
        newItem.onclick = (event) => {
            deleteItem();
        };
    }

    function deleteItem() {
        const newItem = document.querySelector('.shopping-list__item--new');
        let target = event.target;
        while (target !== this) {
            if (target.tagName === 'svg') {
                target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
                if (!document.querySelector('.shopping-list__item--new')) {
                    document.querySelector('.shopping-list__title-empty').classList.remove('disable');
                }
                return;
            }
            target = target.parentNode;
        }
    }

    function notEmpty() {
        const newItem = document.querySelector('.shopping-list__item--new');
        newItem ? document.querySelector('.shopping-list__title-empty').classList.add('disable') : false;
    }
};
