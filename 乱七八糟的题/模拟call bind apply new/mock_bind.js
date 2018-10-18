// 代码摘抄自
// https://github.com/mqyqingfeng/Blog/issues/12

let obj = {
    name: 'wei wang'
}

function foo(){
    console.log(this.name);
    console.log(arguments);
}

Function.prototype.bind_ = function($this){
    let argv = [];
    for(let i = 1; i < arguments.length; i++){
        argv.push(arguments[i]);
    }
    let this_ = this;
    return function(){
        for(let i = 0; i < arguments.length; i++){
            argv.push(arguments[i]);
        }
        return this_.apply($this, argv);
    }
}

let newFunction = foo.bind_(obj, ...[1, 2, 3]);

newFunction(...[4, 5, 6]);

// 难点
/**
 * 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。
 */

