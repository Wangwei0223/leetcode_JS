// https://github.com/mqyqingfeng/Blog/issues/7
// JavaScript深入之从ECMAScript规范解读this

// 从另一个角度解释this, 增强理解
function foo() {
    console.log(this)
}

foo(); 

var a = 0;

var foo = {
    a: 2,
    bar: function () {
        return this.a;
    },
}

if((false || foo.bar)()){
    console.log(1);
}else{
    console.log(0);
}