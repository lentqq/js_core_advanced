const expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
};

describe('lookupChar', () => {
    it('Should return undefined, when the first parameter i`snt a sting', () => {
        let expected = lookupChar(1, 1);
        expect(expected).to.equal(undefined, 'The first parameter should be a string');
    });
    it('Should return undefined, when the second parameter i`snt a integer', () => {
        let expected = lookupChar('1', '1');
        expect(expected).to.equal(undefined, 'The second parameter should be a integer(test with string)');
    });
    it('Should return undefined, when the second parameter i`snt a integer', () => {
        let expected = lookupChar('1', 1.5);
        expect(expected).to.equal(undefined, 'The second parameter should be a integer(test with double number)');
    });
    it('Should return "Incorrect index",when the index is a negative', () => {
        let expected = lookupChar('Nik', -7);
        expect(expected).to.equal('Incorrect index', 'The function did not return correct index(test with negative number)');
    });
    it('Should return "Incorrect index",when the index is a bigger than string lenggth', () => {
        let expected = lookupChar('Nik', 7);
        expect(expected).to.equal('Incorrect index', 'The function did not return correct index(test with bigger index)');
    });
    it('Should return correct character', () => {
        let expected = lookupChar('Nik', 2);
        expect(expected).to.equal('k', 'The function return correct result');
    });
});