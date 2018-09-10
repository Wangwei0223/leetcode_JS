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
        if (left[0] < right[0]) {
            res.push(left.shift());
        }
        else {
            res.push(right.shift());
        }
    }
    return res.concat(left, right);
}

var test_arr = [1, 3, 3, 7, 8, 3, 3, 5, 34, 65, 3, 4, 2, 3, 5, 6, 3, 3, 2, 5, 3]
console.log(MergeSort(test_arr));