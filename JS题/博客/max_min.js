// JavaScript专题之如何求数组的最大值和最小值
// 摘抄自 https://github.com/mqyqingfeng/Blog/issues/35

// Math.max  Math.max([value1[,value2, ...]]) 如果有任一参数不能被转换为数值，则结果为 NaN

// 循环遍历

let arr = [7, 8, 3, 4, 5, 9, 2, 3, 4];

let result = arr[0];

for(let i of arr){
    result = Math.max(i, result);
}

// reduce 数组中的每个值（从左到右）开始缩减，最终计算为一个值

function getMax(prev, next){
    return Math.max(prev, next);
}

console.log(arr.reduce(getMax));

// 排序

arr.sort(function(a, b){
    return b - a;
});

console.log(arr);

// ES6

console.log(Math.max(...arr));