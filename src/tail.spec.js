const tail = require('./tail');

describe('Tail',()=>{
    it('Tail of [1,2,3,4,5] is [2,3,4,5]',()=>{
        expect(tail([1,2,3,4,5])).toEqual([2,3,4,5])
    })

    it('Tail of [] is []]',()=>{
        expect(tail([])).toEqual([]);
    })
})