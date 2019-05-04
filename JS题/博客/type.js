// JavaScript专题之类型判断(上)
// https://github.com/mqyqingfeng/Blog/issues/28

// typeof

// 五种基本类型 number, string, boolean, null, undefined, 一种复杂Object
// 除了null, 其他对应. null为 object

console.log(typeof null);

// typeof 还可以输出 function
function a() { }

console.log(typeof a); // function


console.log(typeof true); // boolean


// Object.prototype.toString
let arr = new Array();
let date = new Date();
/*
When the toString method is called, the following steps are taken:

If the this value is undefined, return "[object Undefined]".
If the this value is null, return "[object Null]".
Let O be the result of calling ToObject passing the this value as the argument.
Let class be the value of the [[Class]] internal property of O.
Return the String value that is the result of concatenating the three Strings "[object ", class, and "]".
*/

console.log(Object.prototype.toString.call(arr), Object.prototype.toString.call(date));

// 注意 undefined 和 null
console.log(Object.prototype.toString.call(undefined), Object.prototype.toString.call(null));

let classType = {};
let classList = ['Number', 'Boolean', 'String', 'Null', 'Undefined', 'Object', 'Function', 'Date', 'Array', 'RegExp', 'Error'];
let newA = classList.map(function (val) {
    classType['[object ' + val + ']'] = val.toLowerCase();
});

// 复杂类型classType里面没有, 会出undefined, 就返回object
function type(param) {
    // ie中 null 和 undefined Object.prototype.toString 返回 [object Object]
    if (obj == null) { // 等价于 undefined或者null
        return obj + "";
    }

    return typeof param === 'object' || 'function' ? classList[Object.prototype.toString.call(param)] || "object" : typeof obj;
}

// 数组
let isArray = Array.isArray || function (arr) {
    return type(arr) === 'array'; 
}