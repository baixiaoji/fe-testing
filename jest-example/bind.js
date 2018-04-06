export default Function.prototype.bind2 = function(context) {
    if(typeof this !== 'function'){
        throw new Error('Please use function to call bind function')
    }
    var self = this,
    args = Array.prototype.slice.call(arguments,1);
    function Fn(){}

    var BoundFn =  function(){
        var bundFnArgs = Array.prototype.slice.call(arguments)
        return self.apply(this instanceof BoundFn? this : context, args.concat(bundFnArgs))
    }
    Fn.prototype = self.prototype
    BoundFn.prototype = new Fn()
    return BoundFn;
}