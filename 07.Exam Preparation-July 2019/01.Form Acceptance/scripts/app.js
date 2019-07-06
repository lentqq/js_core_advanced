function acceptance() {
	let companyData = document.querySelector('input[name = "shippingCompany"]');
	let productData = document.querySelector('input[name = "productName"]');
	let quantityData = document.querySelector('input[name = "productQuantity"]');
	let scrapeData = document.querySelector('input[name = "productScrape"]');
	let wareHouse = document.getElementById('warehouse');

	let btn = document.getElementById('acceptance');
	btn.addEventListener('click', addNewProductData);

	function addNewProductData() {

		if (companyData.value && productData.value && Number(quantityData).value && Number(scrapeData).value) {
			let finalQauantity = Number(quantityData).value - Number(scrapeData).value;

			if (finalQauantity <= 0) {
				return;
			}

			let divElement = document.createElement('div');
			let pElement = document.createElement('p');
			let buttonElement = document.createElement('button');

			divElement.appendChild(pElement);
			divElement.appendChild(buttonElement);
			wareHouse.appendChild(divElement);

			buttonElement.textContent = 'Out of stock';
			buttonElement.addEventListener('click', () => {
				divElement.remove();
			});

			pElement.textContent = `[${companyData}] ${productData} - ${finalQauantity} pieces`;

		}
		document.querySelector('input[name = "shippingCompany"]').value = '';
		document.querySelector('input[name = "productName"]').value = '';
		document.querySelector('input[name = "productQuantity"]').value = '';
		document.querySelector('input[name = "productScrape"]').value = '';

	}
}

acceptance();