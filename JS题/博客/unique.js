// JavaScript专题之数组去重
// 摘自https://github.com/mqyqingfeng/Blog/issues/27

// 原始方法 indexOf 起始就是两层循环

let array = [1, 1, '1'];

function unique(arr) {
    let res = [];

    for(let i of arr){
        if(arr.indexOf(i) === -1){
            res.push(i);
        }
    }

    return res;
}

console.log(unique(array));
