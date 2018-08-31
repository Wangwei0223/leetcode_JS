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