/**
 * 每次new一个对象其中属性自增 方法一: 写原型里
 */
function GenerateId() {
    GenerateId.prototype.id = GenerateId.prototype.id !== undefined ? GenerateId.prototype.id + 1 : 1;
    return new function () {
        this.id = GenerateId.prototype.id;
    };
}

var a = new GenerateId();
var b = new GenerateId();
var c = new GenerateId();

console.log(a.id) //1
console.log(b.id) //2
console.log(c.id) //3

/**
 * 方法二 不写原型里
 */

function GenerateId_() {
    var i = 1;  //模拟全局重定义
    GenerateId_ = function(){
        return new function () {
            this.id = i++;
        };
    }
    return new function () {
        this.id = i++;
    };
}

var a = new GenerateId_();
var b = new GenerateId_();
var c = new GenerateId_();

console.log(a.id) //1
console.log(b.id) //2
console.log(c.id) //3


function GenerateId2(){
    GenerateId2.prototype.id === undefined ? GenerateId2.prototype.id = 1 : GenerateId2.prototype.id += 1;

    return new function () { 
        this.id = GenerateId2.prototype.id;
    }
}

let a2 = new GenerateId2();
let b2 = new GenerateId2();
let c2 = new GenerateId2();

console.log(a2.id) //1
console.log(b2.id) //2
console.log(c2.id) //3

// 方法重新定义, 这种方法可以永久保留闭包的值
function GenerateId3() { 
    let id = 1;
    GenerateId3 = function () { 
        this.id = id++;
    }
    return new GenerateId3();
 }

let a3 = new GenerateId3();
let b3 = new GenerateId3();
let c3 = new GenerateId3();

console.log(a3.id) //1
console.log(b3.id) //2
console.log(c3.id) //3