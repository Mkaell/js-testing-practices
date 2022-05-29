const getData = require('./getData');
const axios = require('axios');
const arrayUsers = require('./constanta');

jest.mock('axios');

describe('async test getData', () => {
    let response;
    beforeEach(() => {
        response = {
            data: arrayUsers
        }
    });

    test('Correct value', async () => {
        axios.get.mockReturnValue(response);
        const data = await getData();
        
        expect(axios.get).toBeCalledTimes(1);
        expect(data).toEqual(['1', '2', '3']);
    });       
      
});