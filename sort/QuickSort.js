/**
 * 快速排序
 */

function QuickSort(arr) {
    return Quick(arr, 0, arr.length - 1);
}

function Quick(arr, left, right) {
    var index;
    if (left < right) {
        index = partition(arr, left, right);
        if (left < index - 1) {
            Quick(arr, left, index - 1);
        }
        if (right > index) {
            Quick(arr, index, right);
        }
    }
    return arr;
}

function partition(arr, left, right) {
    const pivot = arr[Math.floor((left + right) / 2)];
    var i = left, j = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    return i;
}

console.log(QuickSort([2, 3, 6, 8, 2, 4, 5, 63, 45, 63, 2, 3, 53, 3]))