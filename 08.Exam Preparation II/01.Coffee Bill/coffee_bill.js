function addProduct() {
    let productData = document.getElementsByTagName('input')[0].value;
    let priceData = document.getElementsByTagName('input')[1].value;
    let tableData = document.getElementById('product-list');


    if (productData && Number(priceData) > 0) {
        let totalSum = document.querySelector('tfoot')
            .getElementsByTagName('tr')[0]
            .getElementsByTagName('td')[1];

        let trElement = document.createElement('tr');
        let tdProductElement = document.createElement('td');
        let tdPriceElement = document.createElement('td');

        tdProductElement.textContent = productData;
        tdPriceElement.textContent = priceData;

        trElement.appendChild(tdProductElement);
        trElement.appendChild(tdPriceElement);
        tableData.appendChild(trElement);

        let refreshTotalSum = Number(totalSum.textContent);
        refreshTotalSum += Number(priceData);
        totalSum.textContent = refreshTotalSum;

        document.getElementsByTagName('input')[0].value = '';
        document.getElementsByTagName('input')[1].value = '';
    }
    // else {

    //     alert('Please insert the missing data');
    // }
}

addProduct();