function tikets(tiketArray, sortingCriteria) {
    class Tiket {
        constructor(destination, pricre, status) {
            this.destination = destination;
            this.pricre = pricre;
            this.status = status;
        };
    };
    let sortedTikets = [];

    for (let tiket of tiketArray) {
        [destination, price, status] = tiket.split('|');
        price = Number(price);
        sortedTikets.push(new Tiket(destination, price, status));
    }
    switch (sortingCriteria) {
        case 'destination':
            sortedTikets.sort((a, b) => {
                return a.destination.localeCompare(b.destination);
            })
            break;
        case 'price':
            sortedTikets.sort((a, b) => {
                return a.destination - b.destination;
            })
            break;
        case 'status':
            sortedTikets.sort((a, b) => {
                return a.status.localeCompare(b.status);
            })
            break;
    }
 
    return sortedTikets;
}

console.log(tikets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'));