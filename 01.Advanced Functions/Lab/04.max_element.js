function maxElement(arrayNumbers) {
    let maxElement = arrayNumbers.reduce((a, b) => {
        return Math.max(a, b);
    });

    console.log(maxElement);
}

maxElement([1, 44, 123, 33]);