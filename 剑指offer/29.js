/**
 * 
输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。
 * @param {*} input 
 * @param {*} k 
 */
function GetLeastNumbers_Solution(input, k) {
    // write code here
    if (input.length <= k) return input;
    //构建堆
    var res = input.slice(0, k);
    for (let i = Math.floor(input.length / 2) - 1; i >= 0; i--) {
        hepify(res, i);
    }
    //再遍历后续的节点
    for (let j = k; j < input.length; j++) {
        if (res[0] > input[j]) {
            res[0] = input[j];
            hepify(res, 0);
        }
    }

    return res;
}

function hepify(arr, index) {
    var left = index * 2 + 1;
    var right = index * 2 + 2;
    var largest = index;
    if (arr[left] > arr[largest]) {
        largest = left;
    }
    if (arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== index) {
        var temp = arr[index];
        arr[index] = arr[largest];
        arr[largest] = temp;
        hepify(arr, largest);
    }
}

console.log(GetLeastNumbers_Solution([4, 5, 1, 6, 2, 7, 3, 8], 4));