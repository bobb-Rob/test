const stringLength = require('./stringLength');

describe('stringLength test', () => {
    test('return string length', () => {
        let string = 'eleora';

        const result = stringLength(string);
        
        expect(result).toBe(6);
    });
    
    test('return string length', () => {
        // Arrange
        const string = 'i';
        // Act
        const result = stringLength(string);
        // Assert
        expect(result).toBe(1);
    });
    
    test('is string atleast one char and not greater than 10', () => {
        // Arrange
        const string = '';
            
        // Assert        
        expect(() => stringLength(string)).toThrow('string too short');
    })
    
    test('is string atleast one char and not greater than 10', () => {
        // Arrange
        const string = 'appreciation';
        //Assert
        expect(() => stringLength(string)).toThrow('string too long');
    })
})