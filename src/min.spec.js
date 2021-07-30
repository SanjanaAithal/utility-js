const min = require('./min');

describe('Filter',()=>{
    it('min([1,2,3,4]) is 1', () => {
        expect(min([1,2,3,4])).toEqual(1);
    })

    it('min([]) is 0', () => {
        expect(min([])).toEqual(0);
    })
   
})