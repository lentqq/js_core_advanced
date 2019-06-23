function toggle() {
    let changeButtonContent = document.querySelector('.button');
    let changeDisplayStyle = document.getElementById('extra');

    if( changeDisplayStyle.style.display === 'none') {
        changeDisplayStyle.style.display = 'block';
        changeButtonContent.textContent = 'Less';
    }
    else {
        changeDisplayStyle.style.display = 'none';
        changeButtonContent.textContent = 'More';
    }
} 