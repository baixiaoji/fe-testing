import thunk from "./thunk"

describe('achieve the loadash thunk function', () => {
    test("check the return value 默认不传size的时候",() => {
        expect(thunk([1,2,3,4])).toEqual([[1], [2], [3], [4]])
    })
    
    test("add some example size",() => {
        expect(thunk([2,1,3,1,3],2)).toEqual([[2,1],[3,1],[3]])
    })

    test("the size is a negative number", () => {
        expect(thunk([1,2,3], -1)).toEqual([])
    })

    test("the size greater than array size", () => {
        expect(thunk([1,2,3], 4)).toEqual([1,2,3])
    })

    test("the first arguments is not a array", () => {
        expect(() => {thunk(null, 1)}).toThrow()
        expect(() => {thunk(null, 1)}).toThrowError('You need pass an array')
    })
})
