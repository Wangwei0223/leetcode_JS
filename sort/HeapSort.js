function heapify(arr, index, len) {
    var left = index * 2 + 1, right = index * 2 + 2, largest = index;
    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== index) {
        [arr[index], arr[largest]] = [arr[largest], arr[index]];
        heapify(arr, largest, len);
    }
}

function HeapSort(arr) {
    var len = arr.length;
    //构建堆
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr, i, arr.length);
    }
    //堆排序

    for (let j = arr.length - 1; j > 0; j--) {
        [arr[0], arr[j]] = [arr[j], arr[0]];
        heapify(arr, 0, --len);
    }
    return arr;
}

console.log(HeapSort([2, 3, 6, 8, 2, 4, 5, 63, 45, 63, 2, 3, 53, 3]));