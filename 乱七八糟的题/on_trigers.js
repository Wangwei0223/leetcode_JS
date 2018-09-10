/**
 * 实现on trigger 注意 arguments 是类数组 还有 apply
 */

var event = {};
function on(type, handle) {
    if (!event[type]) {
        event[type] = [];
        event[type].push(handle);
    } else {
        event[type].push(handle);
    }
}
function trigger(type) {
    var func_list = event[type];
    for (let i = 0; i < func_list.length; i++) {
        var args = [];
        for (let i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        func_list[i].apply(null, args);
    }
}

on('foo', function () {
    console.log('foo fired');
});
on('foo', function (a) {
    console.log(a); //1
})
on('bar', function (a, b) {
    console.log(a + ' ' + b); //2 3
})
trigger('foo', 1);

trigger('bar', 2, 3);