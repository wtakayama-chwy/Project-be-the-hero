const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => { // Describe the test
    it('should generate an unique ID', () =>{ // What it's supposed to do
        const id = generateUniqueId();

        expect(id).toHaveLength(8); // Expect to act like this
    });
});