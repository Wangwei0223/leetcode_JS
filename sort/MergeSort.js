/**
 * 归并排序
 */
function MergeSort(arr) {
    if (arr.length === 1) return arr;
    var left = arr.slice(0, Math.floor(arr.length / 2));
    var right = arr.slice(Math.floor(arr.length / 2));
    return Merge(MergeSort(left), MergeSort(right)); // 总会分割到长度为1的数组
}


function Merge(left, right) {
    var res = [];
    while (left.length && right.length) {
        left[0] < right[0] ? res.push(left.shift()) : res.push(right.shift());
    }
    return res.concat(left, right);
}

var test_arr = [1, 3, 3, 7, 8, 3, 3, 5, 34, 65, 3, 4, 2, 3, 5, 6, 3, 3, 2, 5, 3]
console.log(MergeSort(test_arr));

/**
 * 归并排序应用: 多个有序数组合并 
 */

function MergeArr(arrs) {
    if (arrs.length === 1) return arrs[0];
    var mid = Math.floor(arrs.length / 2);
    var left = arrs.slice(0, mid);
    var right = arrs.slice(mid);
    return Merge_(MergeArr(left), MergeArr(right));
}

function Merge_(left, right) {
    var i = 0, j = 0, res = [];
    while (left.length > i && right.length > j) {
        left[i] < right[j] ? res.push(left[i++]) : res.push(right[j++]);
    }
    return res.concat(left.slice(i), right.slice(j));
}

var test_arrs = [[1, 2, 3], [6, 7, 8], [9, 10, 11]];

console.log(MergeArr(test_arrs));