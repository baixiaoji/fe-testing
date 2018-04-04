require('./call.js');

var name = 'window'
var baixiaoji = {
    name: 'baiji'
}
function sayName() {
    return this.name;
}
function giveName(name,age) {
    return {
        name,
        age
    }
}
describe('achieve the call function', () => {
    test("Give function to this Context", () => {
        expect(sayName.call2(baixiaoji)).toBe('baiji')
    })
    
    test("when this is null, to pointer the window", () => {
        var pointer = global? 'nodejs' : 'window'
        expect(sayName.call2()).toBe(pointer)
    })
    
    test("deliver some argument to the function", ()=> {
        expect(giveName.call2(null,'baixiaoji',21)).toEqual({name:'baixiaoji',age: 21})
    })    
})
