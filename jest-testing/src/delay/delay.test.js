const delay = require('./delay');

describe('Test delay', () => {
    test('Correct value', async () => {
        const sum = await delay(() => 5 + 5, 1000);
        expect(sum).toBe(10);
    });       
      
});