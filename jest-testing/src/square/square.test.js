const square = require('./square');

describe('Square number', () => {
    // Before each test
    beforeEach(()=>{
    });
    // One time before all tests
    beforeAll(()=>{
    });

    test('Correct value', () => {
        expect(square(6)).toBe(36);     
        expect(square(2)).toBeLessThan(5);     
        expect(square(5)).toBeGreaterThan(20);        
        expect(square(5)).not.toBeUndefined();        
    });

    test('Mock value', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);

        expect(spyMathPow).toBeCalledTimes(1);         
        expect(spyMathPow).not.toBeCalledTimes(2);         
    });
    test('Mock value 1', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);

        expect(spyMathPow).toBeCalledTimes(0);                
    });
    
    // After each test
    afterEach(()=>{
        jest.clearAllMocks();
    });
    // One time after all tests
    afterAll(()=>{
    });
    
});