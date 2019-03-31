// https://github.com/mqyqingfeng/Blog/issues/11
// JavaScript深入之call和apply的模拟实现

var name = 'wei wang';

function foo(){
    console.log(this.name);
    console.log('argv: ', arguments);
}

// 注意非node 环境中是 wei wang 定义变量默认挂到windows属性, node环境中this 默认是一个空对象

var obj = {
    name: 'we'
}

foo.call(obj, ...[1, 2]);

// 第一步 把函数变为要绑定对象的属性

/**
 * 所以我们模拟的步骤可以分为：
    将函数设为对象的属性
    执行该函数
    删除该函数
 */

// 第二步 处理参数

// 第三步 记得this为null 默认是window node环境就先写成global代替
Function.prototype.call_ = function($this){
    // this 可以获取调用call的函数
    $this.fn = this || global;
    // let args = Array.prototype.slice.call(arguments, 1); // 斜率arguments 跳过V8 优化
    let args = [];
    for(let i = 1;  i < arguments.length; i++){
        args.push(arguments[i]);
    }
    // 不使用es6的话, let result = eval('context.fn(' + args + ')');
    let result = $this.fn(...args);
    delete $this.fn;
    return result;
}

foo.call_(obj, 1, 2, 3, 4);

Function.prototype.apply_ = function($this){
    $this.fn = this || global;
    // let args =  arguments[1];
    let args = [];
    for(let i = 0; i < arguments[1].length; i++){
        args.push(arguments[1][i]);
    }
    let result = $this.fn(...args);
    delete $this.fn;
    return result;
}

foo.apply_(obj, [1, 2, 3, 4]);