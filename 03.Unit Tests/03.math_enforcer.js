const expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('mathEnforcer', () => {
    it('addFive() with positive number,must return number + 5', () => {
        let expected = mathEnforcer.addFive(10);
        expect(expected).to.equal(15, 'The function return correct positive result');
    });
    it('addFive() with negative number,must return number + 5', () => {
        let expected = mathEnforcer.addFive(-10);
        expect(expected).to.equal(-5, 'The function return correct negative result');
    });
    it('addFive() with double number,must return number + 5', () => {
        let expected = mathEnforcer.addFive(10.3);
        expect(expected).to.be.closeTo(15.3, 0.01, 'The function return correct double-number result');
    });
    it('addFive() with string as a parameter', () => {
        let expected = mathEnforcer.addFive('nik');
        expect(expected).to.equal(undefined, 'The function return undefined with string as a parameter');
    });
    it('subtractTen() with positive number,must return number - 10', () => {
        let expected = mathEnforcer.subtractTen(10);
        expect(expected).to.equal(0, 'The function return correct result');
    });
    it('subtractTen() with negative number,must return number - 10', () => {
        let expected = mathEnforcer.subtractTen(-10);
        expect(expected).to.equal(-20, 'The function return correct result');
    });
    it('subtractTen() with double number,must return number - 10', () => {
        let expected = mathEnforcer.subtractTen(10.8);
        expect(expected).to.be.closeTo(0.8, 0.01, 'The function return correct result');
    });
    it('subtractTen() with a string as a parameter,must return undefined', () => {
        let expected = mathEnforcer.subtractTen('Nik');
        expect(expected).to.be.equal(undefined, 'The function return correct result undefined');
    });
    it('sum() with two positive numbers,must return their sum', () => {
        let expected = mathEnforcer.sum(3, 4);
        expect(expected).to.be.equal(7, 'The function return correct sum of two numbers');
    });
    it('sum() with two negative numbers,must return their sum', () => {
        let expected = mathEnforcer.sum(-3, -4);
        expect(expected).to.be.equal(-7, 'The function return correct sum of two numbers');
    });
    it('sum() with two double numbers,must return their sum', () => {
        let expected = mathEnforcer.sum(3.3, 4.4);
        expect(expected).to.be.closeTo(7.7, 0.01, 'The function return correct sum of two double numbers');
    });
    it('sum() with string as first parameter and number as second', () => {
        let expected = mathEnforcer.sum('Nik', 4);
        expect(expected).to.be.equal(undefined, 'The function return undefined with a string as first parameter');
    });
    it('sum() with string as second parameter and number as first', () => {
        let expected = mathEnforcer.sum(4,'Nik');
        expect(expected).to.be.equal(undefined, 'The function return undefined with a string as second parameter');
    });
});
