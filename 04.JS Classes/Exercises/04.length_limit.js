class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length) {
        this.innerLength += length
    }

    decrease(length) {
        this.innerLength -= length;

        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        let outpute = this.innerString;

        if (this.innerLength === 0) {
            outpute = '...';
        }
        else if (this.innerString.length > this.innerLength) {
            let cutedSting = this.innerString.length - this.innerLength;
            outpute = this.innerString.substring(0, cutedSting);
            outpute += '...';
        }
        return outpute;
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
