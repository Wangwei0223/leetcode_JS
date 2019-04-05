// https://github.com/mqyqingfeng/Blog/issues/16
// JavaScript深入之继承的多种方式和优缺点

// 1.原型链继承
function Parent() {
    this.name = 'kevin';
    this.names = ['kevin', 'daisy']; // 问题1: 引用类型共享
}

Parent.prototype.getName = function () {
    console.log(this.name);
}

function Child() {

}

Child.prototype = new Parent(); // 子类.prototype = new 父类构造函数();

var child1 = new Child();

child1.names.push('wei');

child1.getName(); // kevin

var child2 = new Child();

console.log(child2.names);

// 问题2: 在创建 Child 的实例时，不能向Parent传参

// 2.借用构造函数(经典继承)
/**
 *  优点：
    1.避免了引用类型的属性被所有实例共享
    2.可以在 Child 中向 Parent 传参
 *  
 */
function Parent() {
    this.names = ['kevin', 'daisy'];
}

function Child() {
    Parent.call(this); // 借用构造函数
    // 问题: 方法都在构造函数中定义，每次创建实例都会创建一遍方法。
}

var child1 = new Child();

child1.names.push('yayu');

console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();

console.log(child2.names); // ["kevin", "daisy"]