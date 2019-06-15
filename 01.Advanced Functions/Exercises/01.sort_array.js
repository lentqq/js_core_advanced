function sortArray(numbersArray, string) {
    if (string === 'asc') {
        numbersArray.sort((a, b) => a - b);
    }
    else {
        numbersArray.sort((a, b) => b - a);
    }
    console.log(numbersArray);
}

sortArray([14, 7, 17, 6, 8], 'desc');