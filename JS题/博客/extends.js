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
    Parent.call(this); // 借用构造函数, 因为每个实例的this不同, 所以这里保证了不共享引用类型
    // 问题: 方法都在构造函数中定义，每次创建实例都会创建一遍方法。
}

var child1 = new Child();

child1.names.push('yayu');

console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();

console.log(child2.names); // ["kevin", "daisy"]

// 3.组合继承
// 原型链继承和经典继承双剑合璧。
// 优点：融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。

console.log('======组合继承======');

function Parent_(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent_.prototype.getName = function () {
    console.log(this.name)
}

function Child_(name, age) {

    Parent_.call(this, name); // 借用构造函数, 因为每个实例的this不同, 所以这里保证了不共享引用类型

    this.age = age;

}

Child_.prototype = new Parent_();
Child_.prototype.constructor = Child_;

var child1_ = new Child_('kevin', '18');

child1_.colors.push('black');

console.log(child1_.name); // kevin
console.log(child1_.age); // 18
console.log(child1_.colors); // ["red", "blue", "green", "black"]

var child2_ = new Child_('daisy', '20');

console.log(child2_.name); // daisy
console.log(child2_.age); // 20
console.log(child2_.colors); // ["red", "blue", "green"]


console.log('======Object.create() 与 new Object()======');

let example = {
    list: [1, 2]
}

// 都会共享引用类型

let a = Object.create(example); // Object.create的出现就是为了规范化原型式继承
let b = Object.create(example);
let c = new Object(example); // new Object()方法的实质是，使用引用类型Object的构造函数创建了一个新的实例，这个实例拥有Object默认的方法如toString、toLocaleString等。

a.list.push(2);
console.log(b.list);
console.log(c.list);

console.log(b.__proto__); // { list: [ 1, 2, 2 ] }
console.log(c.__proto__);// {}

// 4.原型式继承, 其实就是Object.create的模拟
console.log('======原型继承======');

let exten = function (obj) {
    let F = function(){};
    F.prototype = obj;
    return new F();
}

function obj(){
    this.list = [1, 2, 3, 4, 5]
}

let ori = new obj();

let exten_obj = exten(ori);
let exten_obj1 = exten(ori);

console.log(exten_obj.__proto__); // 对象的__proto__指向创建它的函数的prototype, 就是F的prototype 就是obj
console.log(exten_obj instanceof obj); //exten_obj延__proto__去找, 创建它的函数F, F的prototype找到了obj. obj延prototype去找
// 和原型继承一样, 共享引用属性
exten_obj1.list.push(6);
console.log(exten_obj);