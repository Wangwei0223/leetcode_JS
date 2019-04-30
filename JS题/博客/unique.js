// JavaScript专题之数组去重
// 摘自https://github.com/mqyqingfeng/Blog/issues/27

// 原始方法 indexOf 起始就是两层循环 兼容性好

let array = [2, 2, '2', 1, 1, '1', '2', 'a', 'A', 'A', 'a'];

function unique_(arr) {
    let res = [];

    for (let i of arr) {
        if (res.indexOf(i) === -1) {
            res.push(i);
        }
    }

    return res;
}

// 排序后去重
function unique__(arr) {
    let res = [];
    let sorted = arr.slice().sort(); // 字符排在数字后面
    for (let i = 0, len = sorted.length; i < len; i++) {
        if (sorted[i] !== sorted[i + 1]) {
            res.push(sorted[i]);
        }
    }

    return res;
}

// unique API

function unique_api(arr, isSorted, iteratee) {
    let res = [];
    let seen = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        let current = arr[i];
        var computed = iteratee ? iteratee(current) : current;
        if (isSorted) {
            if (!i || seen !== computed) {
                res.push(computed);
            }
            seen = current;
        } else if (iteratee) {
            if (seen.indexOf(computed) === -1) {
                seen.push(computed);
                res.push(current);
            }
        } else if (res.indexOf(current) === -1) {
            res.push(current);
        }
    }

    return res;
}

console.log(unique_api(array, false, function (item) {
    return typeof item === 'string' ? item.toLowerCase() : item;
}));

// ES5 filter

function unique___(arr) {
    let res = arr.slice().sort().filter(function (val, index, arr) { // 排序
        return !index || val !== arr[index - 1];
    });

    return res;
}

// 只要在此位置的, 重复元素肯定重复的那个(只有最先出现的一个是indexOf与index对应)自己的index和indexOf不对应因为indexOf取最近的
function unique(arr) {
    let res = arr.slice().filter(function (val, index, arr) {
        return arr.indexOf(val) === index;
    });

    return res;
}

console.log(unique(array));

// ES6
function unique_es6_from(arr) {
    return Array.from(new Set(arr));
}

function unique_es6_arr(arr) {
    return [...new Set(arr)];
}

let unique_es6 = arr => [...new Set(arr)];

function unique_es6_map(arr) {
    let seen = new Map();
    return arr.filter(val => !seen.has(val) && seen.set(val, 1));
}

// Object 键值对

// 我们可以发现，是有问题的，因为 1 和 '1' 是不同的，但是这种方法会判断为同一个值，这是因为对象的键值只能是字符串，
// 所以我们可以使用 typeof item + item 拼成字符串作为 key 值来避免这个问题

// 对象又不行了 typeof obj + obj object[object Object]
function unique_obj(array) {
    var obj = {};
    return array.filter(function (item) {
        return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true); // if(a = true) 会先执行 a = true 再判断 a 是不是 falsy
    })
}

let obj = [[1, 2], [1, 2], [2, 3]];

let arr = [undefined, undefined, null, null, new String('1'), new String('1'), '1' , /a/, /a/, NaN, NaN]

console.log(unique_obj(arr));