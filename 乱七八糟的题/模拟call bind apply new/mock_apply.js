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