const max = require('./max');

describe('Filter',()=>{
    it('max([1,2,3,4]) is 4', () => {
        expect(max([1,2,3,4])).toEqual(4);
    })

    it('max([]) is 0', () => {
        expect(max([])).toEqual(0);
    })
   
})