/**
 * arr交换i,j位置
 * @param {*} arr 
 * @param {*} i 
 * @param {*} j 
 */
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

/**
 * 给定num, 小于num的放在num左边, 大于num的放在右边
 * @param {*} arr 
 * @param {*} num 
 * 设置left,初始值为-1, 遍历数组, 如果发现比num小的数字, 把num与小于区域的后一个交换, left + 1, 扩大小于区域
 */
function partition(arr, num) {
    let left = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < num) {
            swap(arr, left + 1, i);
            left++
        }
    }
}

let arr = [1, 6, 5, 7, 5, 8, 3, 6, 5, 5, 2, 2, 3, 5, 9, 9];

partition(arr, 5);

console.log(arr);

/**
 * 给定num, 小于num的放在num左边, 大于num的放在右边, 等于numd的放中间
 * @param {*} arr 
 * @param {*} num
 * 设置左右当前三个指针, 如果当前cur === num, cur往下检查下一个;
 * 如果cur < num, cur与left + 1 交换, left++ 扩大小于区域, cur++ 检查下一个
 * 如果cur > num, cur与 right - 1交换, cur不动, 因为要检查从右边交换过来的数与num的大小关系.(这也是为什么不用for循环的原因) right++扩大大于区域;
 * cur === right下标, 停止
 */
function NetherlandFlag(arr, num) {
    let left = -1;
    let right = arr.length;
    let cur = 0;
    while (cur !== right) {
        if (arr[cur] === num) cur++;
        else if (arr[cur] < num) {
            swap(arr, left + 1, cur);
            left++;
            cur++;
        }
        else {
            swap(arr, right - 1, cur);
            right--;
        }
    }
}

let arr_1 = [1, 6, 5, 7, 5, 8, 3, 6, 5, 5, 2, 2, 3, 5, 9, 9];

NetherlandFlag(arr_1, 5);

console.log(arr_1);

function QuickSort(arr, left, right) {
    if (left < right) {
        let temp = QuickSortPartition(arr, left, right);
        QuickSort(arr, left, temp[0]);
        QuickSort(arr, temp[1], right);
    }

}

function QuickSortPartition(arr, left, right) {
    let less = left - 1;
    let more = right;
    let cur = left;
    // 以最后一个作为划分点
    while (cur < more) {
        if (arr[cur] === arr[right - 1]) {
            cur++;
        } else if (arr[cur] < arr[right - 1]) {
            swap(arr, cur++, ++less);
        } else {
            swap(arr, --more, cur);
        }
    }
    return [less + 1, more]; // 左闭右开
}

let arr_2 = [1, 6, 5, 7, 5, 8, 3, 6, 5, 5, 2, 2, 3, 5, 9, 9];
QuickSort(arr_2, 0, arr_2.length);
console.log('快排: ', arr_2);