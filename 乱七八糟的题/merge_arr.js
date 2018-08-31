// 合并有序数组
let a = [2, 6, 10, 12]
let b = [4, 6, 12, 78]


function Merge(arr_1, arr_2) {
    var res = [];
    while (arr_1.length > 0 && arr_2.length > 0) {
        if (arr_1[0] < arr_2[0]) {
            res.push(arr_1[0]);
            arr_1.shift();
        }
        else {
            res.push(arr_2[0]);
            arr_2.shift();
        }
    }
    return res.concat(arr_1, arr_2);
}

function Merge_(arr_1, arr_2) {
    var res = [];
    var i = 0, j = 0;
    while (arr_1.length > i && arr_2.length > j) {
        if (arr_1[i] < arr_2[j]) {
            res.push(arr_1[i]);
            i++;
        }
        else {
            res.push(arr_2[j]);
            j++;
        }
    }
    return res.concat(arr_1.slice(i), arr_2.slice(j));
}

console.log(Merge_(a, b));