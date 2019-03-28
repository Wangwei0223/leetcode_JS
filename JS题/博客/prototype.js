/**
 * https://github.com/mqyqingfeng/Blog/issues/2
 * JavaScript深入之从原型到原型链
 */
function log(_) { 
    console.log(_);
 }


function foo(){
    this.name = 'wang';
}

foo.prototype.name = 'wei';

let p = new foo();

log(p.name2); // undefined
log(p.__proto__ === foo.prototype); // true

log(foo.prototype.constructor === foo); // true 每个原型都有一个 constructor 属性指向关联的构造函数
log(p.constructor === foo); // true

// p.constructor === foo.prototype.constructor

// 获得对象原型
log(Object.getPrototypeOf(p));  // foo { name: 'wei' }

