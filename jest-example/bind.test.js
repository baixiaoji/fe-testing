import "./bind.js"

describe("achieve the bind function", () => {
    var foo = {
        value: 1,
        a:Function.prototype.bind2
    }
    function bar(){
        return this.value
    }
    function xixi(name,age) {
        return {
            name,
            age
        }
    }
    function haha(name, age){

        console.log(this.value,name,age);
    }
    haha.prototype.nickName = 'Future'
    var fnBound = bar.bind2(foo)
    var xiBound = xixi.bind2(foo, 'baixiaoji');
    var haBound = haha.bind2(foo, 'baixiaoji');

    it("call bind is not a function", ()=>{    
        // 还没想到
        expect(() => {foo.a()}).toThrowError("Please use function to call bind function")
    })
    it("first params is the this value and return a function", ()=>{ 
        expect(fnBound()).toBe(1);
    })

    it("keep params and can pass some param to fnBound", ()=>{ 
        expect(xiBound(23)).toEqual({name: 'baixiaoji', age:23});
    })

    it("the BoundFn can new the Obj", () => {
        var obj = new haBound();
        expect(obj.nickName).toBe("Future")
    })

})