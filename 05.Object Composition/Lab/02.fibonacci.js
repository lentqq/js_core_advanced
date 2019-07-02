let fibonacci = (function getFibonator () {
  let sum = 0;
  let firstNumber = 0;
  let secondNumber  = 1;
  return function() {
      sum = firstNumber + secondNumber;
      firstNumber = secondNumber;
      secondNumber = sum;
      return firstNumber;
  }
})();

console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(typeof fibonacci);