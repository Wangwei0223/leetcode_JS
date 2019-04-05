/**
 * function Car(name){
 *  this.name = name;
 *  this.age = 1;
 * }
 * 
 * let obj = new Car(name);
 * 
 * mock: let obj = CreateObject(Car, 'Benz');
 */

function Car(name){
    this.name = name;
    this.age = 1;
}

function CreateObject(){
    let obj = new Object();
    let Constructor = [].shift.apply(arguments); // 取出构造函数
    obj.__proto__ = Constructor.prototype; // 对象的隐式原型指向创建这个对象的函数的__prototype__
    let res = Constructor.apply(obj, arguments); // 执行构造函数一遍, 改变this
    return typeof res === 'object'? res : obj; // new 的函数可以有返回值
}

let obj = CreateObject(Car, 'Benz');

console.log(obj);

function Car_(name){
    this.name = name;
    this.age = 1;
    return {name: 'wei'} // 当构造函数返回值类型的时候相当于什么都没做  返回引用类型的时候, 就返回那个引用对象
}

let obj_ = new Car_('Benz');

console.log(obj_);
