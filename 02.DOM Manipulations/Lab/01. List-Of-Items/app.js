function addItem() {
    let input = document.getElementById('newItemText');
    let listItems = document.getElementById('items');
    let li = document.createElement('li');
    li.textContent = input.value;
    listItems.appendChild(li);
    input.value = '';
}

