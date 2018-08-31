/**
 * 每次new一个对象其中属性自增 方法一: 写原型里
 */
function GenerateId() {
    GenerateId.prototype.id = GenerateId.prototype.id !== undefined ? GenerateId.prototype.id + 1 : 1;
    return new function () {
        this.id = GenerateId.prototype.id;
    };
}

let a = new GenerateId();
let b = new GenerateId();
let c = new GenerateId();

console.log(a.id) //1
console.log(b.id) //2
console.log(c.id) //3