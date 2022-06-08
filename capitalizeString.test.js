
const capitalizeString = require('./capitalizeString');

test('henry to be Henry', () => {
    let str = 'henry';

    let result = capitalizeString(str);

    expect(result).toBe('Henry')
})