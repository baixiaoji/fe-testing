export default Function.prototype.call2 = function(context) {
    var context = context || window;
    context.fn = this;
    var args = [];
    for(var i = 1; i < arguments.length; i++) {
        args.push('arguments['+i+']')
    }
    var value = eval('context.fn('+args+')')
    delete context.fn

    return value
}