const expect = require('chai').expect;

function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
};

describe('isOddOrEven', function () {
    // if the parameter is not a string(number)
    // if the parameter is not a string(object)

    it('Test with number parameter, should returns undefined', function () {
        let expected = isOddOrEven(50);

        expect(expected).to.equal(undefined, 'Function returns incorrect result;')
    });
    it('Test with object parameter,shoukd returns undefined', function () {
        let expected = isOddOrEven({ name: 'Nikolay' });

        expect(expected).to.equal(undefined, 'Function returns incorrect result')
    });
    it('String parameter with even length,should returns even', function () {
        let expected = isOddOrEven('Niky');

        expect(expected).to.equal('even', 'Function returns correct result');
    });
    it('String parameter with odd length,should returns odd', function () {
        let expected = isOddOrEven('Nikol');

        expect(expected).to.equal('odd', 'Function returns correct result');
    });
});