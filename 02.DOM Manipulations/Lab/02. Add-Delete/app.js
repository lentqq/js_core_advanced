function addItem() {
    let input = document.getElementById('newText');
    let itemsElement = document.getElementById('items');
    let li = createElement('li', `${input.value} `);

    let aElementAtribute = { name: 'href', value: '#' };
    let aElementEventListener = { type: 'click', func: deleteItem };
    let deleteLink = createElement('a', '[Delete]', aElementAtribute, aElementEventListener);


    appendChilds(li, [deleteLink]);
    appendChilds(itemsElement, [li]);

    clearText(input);

    function deleteItem() {
        itemsElement.removeChild(this.parentNode);
    }

    function createElement(tagElement, text, attribute, eListener) {
        let element = document.createElement(tagElement);
        element.textContent = text;

        if (attribute) {
            element.setAttribute(attribute.name, attribute.value);
        }
        if (eListener) {
            element.addEventListener(eListener.type, eListener.func);
        }
        return element;
    }

    function clearText(input) {
        input.value = '';
    }

    function appendChilds(parent, childs) {
        childs.forEach(child => {
            parent.appendChild(child)
        });
    }
}