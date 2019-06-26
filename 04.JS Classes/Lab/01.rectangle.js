class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea() {
        return this.width * this.height;
    }
}

let result = new Rectangle(4, 5, 'red');

console.log(result.width);
console.log(result.height);
console.log(result.color);
console.log(result.calculateArea());