const reverseString = require('./reverseString');

describe('reverseString.js', () => {
    test('test that "gangrape" is reversed to "epargnag"', () => {
        const str = 'gangrape';

        const result = reverseString(str);

        expect(result).toBe('epargnag');
    })

    test('test that "FreeDom" is reversed to "moDeerF"', () => {
        const str = 'FreeDom';

        const result = reverseString(str);

        expect(result).toBe('moDeerF');
    })

    test('test that "are" is reversed to "era"', () => {
        const str = 'are';

        const result = reverseString(str);

        expect(result).toBe('era');
    })

    test('test that "" is reversed to ""', () => {
        const str = '';

        const result = reverseString(str);

        expect(result).toBe('');
    })
})