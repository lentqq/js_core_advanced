function addItem() {
    //     let text = document.getElementById('newItemText').value;
    //     let value = document.getElementById('newItemValue').value;

    //     if(text === '' && value === '') {
    //         alert('Pleas insert some data!!!');
    //     }
    //     let dropDownMenu = document.getElementById('menu');
    //     // let newOptionElement = document.createElement('option');
    //     let optionElement = document.createElement('option');

    //     optionElement.value = value;
    //     optionElement.textContent = text;
    //     dropDownMenu.appendChild('optionElement');

    //    document.getElementById('newItemText').value = '';
    //    document.getElementById('newItemValue').value= '';
    let text = document.getElementById('newItemText').value;
    let value = document.getElementsByClassName('newItemValue').value;

     if(text === '' && value === '') {
         alert('Please insert some data!!!')
     }

     let dropDownMenu = document.getElementById('menu');
     let optionElement = document.createElement('option');
     optionElement.value = value;
     optionElement.textContent = text;
     dropDownMenu.appendChild('optionElement');
     document.getElementById('newItemText').value = '';
     document.getElementById('newItemValue').value = '';
};