const stringLength = require('./stringLength');

test('return string length', () => {
    expect(stringLength('eleora')).toBe(6);
});

test('is string atleast one char and not greater than 10', () => {
    expect(() => stringLength('')).toThrow('string too short');
})

test('is string atleast one char and not greater than 10', () => {
    expect(() => stringLength('appreciation')).toThrow('string too long');
})