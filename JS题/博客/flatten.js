// JavaScript专题之数组扁平化
// 摘抄自 https://github.com/mqyqingfeng/Blog/issues/36

// 递归

let arr = [[1, 2], 3, [4, [5, 6], [7], [[[8]]]]];

function flatten_(arr) {
    let result = [];
    for (let i of arr) {
        if (Array.isArray(i)) {
            result = result.concat(flatten(i)); // concat 返回新数组不改变原数组
        } else {
            result.push(i);
        }
    }
    return result;
}

function flatten__(arr) {
    return arr.toString().split(',').map(function (item) { return +item; });
}

// reduce reduce 第二个参数为 初始值

function flatten(arr) {
    return arr.reduce(function (prev, next) {
        return prev.concat(Array.isArray(next) ? flatten(next) : next);
    }, []);
}

console.log(flatten(arr));