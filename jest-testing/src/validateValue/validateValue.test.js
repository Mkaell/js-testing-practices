const validateValue = require('./validateValue');

describe('Value validation', () => {
    test('Correct value', () => {
        expect(validateValue(50)).toBe(true);
    });
    test('limit values', () => {
        expect(validateValue(100)).toBe(true);
        expect(validateValue(0)).toBe(true);
    });
    test('Invalid value', () => {
        expect(validateValue(-50)).toBe(false);
    });           
});