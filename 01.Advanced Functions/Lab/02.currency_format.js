function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
};

function getDollarFormater(formater) {
    return function(value) {
        return formater('.', '$', true , value);
    };
};

function getEuroFormater(formater) {
    return function(value) {
        return formater('.', 'euro', true, value);
    };
};

function getLevaFormater(formater) {
    return function(value) {
        return formater(',', 'лв', false, value);
    };
};

let dollarFormater = getDollarFormater(currencyFormatter);
let euroFormater = getEuroFormater(currencyFormatter);
let levaFormater = getLevaFormater(currencyFormatter);

console.log(dollarFormater(100));
console.log(euroFormater(120.5));
console.log(levaFormater(220,35));
