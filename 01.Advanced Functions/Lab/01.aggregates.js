function aggregates(arrayNumbers) {
console.log(`Sum = ${arrayNumbers.reduce((a, b) => a +b)}`);
console.log(`Min = ${arrayNumbers.reduce((a, b) => Math.min(a, b))}`);
console.log(`Max = ${arrayNumbers.reduce((a, b) => Math.max(a, b))}`);
console.log(`Product = ${arrayNumbers.reduce((a, b) => a *b)}`);
console.log(`Join = ${arrayNumbers.reduce((a, b) => '' + a +b)}`);
}

aggregates([2, 3, 10, 5]);