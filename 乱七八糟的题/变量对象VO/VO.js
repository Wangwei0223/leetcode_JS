foo(); // foo1
var foo = function () {
    console.log('foo2');
}

foo(); // foo2

function foo() {
    console.log('foo1');
}

foo(); // foo2

function bar() {
    console.log(a);
    a = 1; // 单独写a不存在变量提升, console.log直接报错 因为这时没找到 window.a (浏览器环境), 不写var是写在window的属性里
}

// bar();

a = 'aaaaaa'; // node 中是global
