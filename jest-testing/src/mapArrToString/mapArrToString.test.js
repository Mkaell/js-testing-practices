const mapArrToString = require('./mapArrToString');

describe('Map array to string', () => {
    test('Correct value', () => {
        expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']);
    });       
    test('Negative result', () => {
        expect(mapArrToString([1, 2, 3])).not.toEqual(['1', '2', '3', '4']);
    });       
    test('Checking for filtering', () => {
        expect(mapArrToString([1, 2, 3, null, undefined, '1'])).toEqual(['1', '2', '3']);
    });       
    test('Empty array', () => {
        expect(mapArrToString([])).toEqual([]);
    });       
});