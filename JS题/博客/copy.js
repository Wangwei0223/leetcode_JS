// JavaScript专题之深浅拷贝
// 摘抄自 https://github.com/mqyqingfeng/Blog/issues/32

// 数组的浅拷贝

// 浅拷贝可以 拷贝不是复杂类型的数组 slice() 或 concat()

// 复杂类型的不行

// 深拷贝

// 技巧 JSON.parse(JSON.stringify());

let arr1 = [{ 'old': 'old' }, true];
let new_arr1 = arr1.slice();

new_arr1[0].old = 'new';
console.log(arr1);
console.log(new_arr1);

var shallowCopy = function (obj) {
    if(typeof obj !== 'object') return obj;
    let newObj = obj instanceof Array ? [] : {};
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            newObj[i] = obj[i];
        }
    }
    return newObj;
}