const mapEle = require('./mapJs');

describe('Map',()=>{
    it('Map of map([1,2,3]) cube is [1,8,27]',()=>{
        expect(mapEle([1,2,3], x => Math.pow(x,3))).toEqual([1,8,27]);
    })

    it('Map of map([]) cube is []',()=>{
        expect(mapEle([], x => Math.pow(x,3))).toEqual([]);
    })

    it('Map of map([1,2,3,4]) identity is [1,2,3,4]', () => {
        expect(mapEle([1,2,3,4],x => x)).toEqual([1,2,3,4]);
    })

    it('map([a{x : 10}],someObject => someObject.x + 1) -> [11]', () => {
        expect(mapEle([{x : 10}],a => a.x+1)).toEqual([11]);
    })
})