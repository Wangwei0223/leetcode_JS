// JavaScript专题之学underscore在数组中查找指定元素
// 摘抄自 https://github.com/mqyqingfeng/Blog/issues/37

// ES6 findIndex

// ES6 对数组新增了 findIndex 方法，它会返回数组中满足提供的函数的第一个元素的索引

let arr = [1, 2, 3, 4, 5, 6];

console.log(arr.findIndex(function (item) {
    return item > 5;
}));

// 实现findIndex

function findIndex(arr, func, context) {
    for (let i = 0; i < arr.length; i++) {
        if (func.call(context, arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}

console.log(findIndex([1, 2, 3], function (item, index, arr) {
    return item === 3;
}));

// createIndexFinder 根据传参不同, 返回findIndex 或 findLastIndex

function createIndexFinder(dir) {
    return function (arr, func, context) {
        let index = dir > 0 ? 0 : arr.length - 1;

        for (; index >= 0 && index < arr.length; index += dir) {
            if (func.call(context, arr[i], i, arr)) {
                return i;
            }
        }

        return -1;
    }
}

// sortedIndex 返回插入后的index

function sortedIndex_(arr, item) {
    let low = 0, high = arr.length;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] < item) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return high;
}

/*
var stooges = [{ name: 'stooge1', age: 10 }, { name: 'stooge2', age: 30 }];

var result = sortedIndex(stooges, { name: 'stooge3', age: 20 }, function (stooge) {
    return stooge.age
});
*/
function cb(func, context){
    return function(){
        return func.call(context, arguments);
    }
}

function sortedIndex(arr, item, func, context) {
    let low = 0, high = arr.length;

    let func = cb(func, context);

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (func(arr[mid]) < func(item)) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return high;
}