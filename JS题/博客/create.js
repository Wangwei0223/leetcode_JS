// https://github.com/mqyqingfeng/Blog/issues/15
// JavaScript深入之创建对象的多种方式以及优缺点

/**
 * 1. 工厂模式
 * 缺点, 没法使用instanceof, 就是没__proto__
 */
function createObject() {
    let o = new Object();
    o.name = 'wang wei';
    o.age = 24;
    o.getName = function () {
        return o.name;
    }
    return o;
}

let p = createObject();

console.log(p.getName());

console.log(p instanceof createObject);

/**
 * 2. 构造函数模式
 * 缺点: 如果构造函数中有函数, 函数将会被创建多次
 */

function person(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function () {  // 缺点就是这个函数会被创建多次
        return this.name;
    }
}

let w = new person('wang', 24);
let w_ = new person('wei', 24);
console.log(w.getName(), w_.getName(), w.getName === w_.getName); // 最后是false

/**
 * 4. 组合模式
 * 缺点: 没有封装
 */

function person_(name, age) {
    this.name = name;
    this.age = age;
}

person_.prototype.getName = function () {  // 缺点就是这个函数会被创建多次
    return this.name;
}

let w1 = new person('aaa', 24);
let w2 = new person('bbb', 25);

console.log(w1.getName(), w2.getName());
console.log(w1.constructor, w2.constructor); // 体感不用 person_.prototype.contructor = person_


/**
 * 4.1 动态原型模式
 * @param {*} name 
 * @param {*} age
 * 改进一下 组合模式的封装性 
 */
function Person(name, age) {
    this.name = name;
    this.age = age;
    if (typeof this.getName !== 'function') {
        Person.prototype.getName = function () {
            return this.name;
        }
    }
}

let p2 = new Person('wei', 24);
let p3 = new Person('wang', 25);

console.log(p2.getName(), p3.getName(), p2.getName === p3.getName); // 最后是true


// 注意：使用动态原型模式时，不能用对象字面量重写原型
function Person_(name) {
    this.name = name;
    if (typeof this.getName != "function") {
        Person_.prototype = {
            constructor: Person,
            getName: function () {
                console.log(this.name);
            }
        }
        return new Person_(name); //改正: 再new一遍
    }
    // return new Person_(name); //改正: 再new一遍 写外面 Maximum call stack size exceeded, 写外面肯定不行, 无限循环了 
}

var person1 = new Person_('kevin');
var person2 = new Person_('daisy');

// 报错 并没有该方法
person1.getName();

// 注释掉上面的代码，这句是可以执行的。
person2.getName();

/**
 * 原因: new的时候, 实例的__proto__是指向Person.prototype的
 * 但是, 执行if中的语句会把 prototype重写, prototype属性指向了一快完全新的内存
 */