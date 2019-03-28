// https://github.com/mqyqingfeng/Blog/issues/4
// JavaScript深入之执行上下文栈
foo();
function foo() {
    console.log('1');
}

var foo = function () {
    console.log('2');
}
foo();

var bar = 2;

function bar() {
    console.log(3);
}

console.log(bar); // 2 or function bar


console.log(bar2); // function bar2 or 5
function bar2(){
    console.log(4);
}

var bar2 = 5;
console.log(bar2); // function bar2 or 5


// 在进入执行上下文时，首先会处理函数声明，其次会处理变量声明，如果如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性。
// 看输出位置, 经过了变量赋值之后变量名还是会覆盖函数

function foo1(){
    console.log("函数声明");
}
var foo1;
console.log(foo1); // function foo1 or undefined
foo1 = "变量";

// 变量声明不覆盖
// 函数提升优先级比变量提升要高，且不会被!!!变量声明!!!覆盖，但是会被!!!变量赋值!!!覆盖。