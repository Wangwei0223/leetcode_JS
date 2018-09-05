function getMedian(arr) {
    var mid = Math.floor(arr.length / 2);
    var max_heap = arr.slice(0, mid);
    var min_heap = max_heap.slice();
    for (let i = Math.floor(max_heap.length / 2) - 1; i >= 0; i--) {
        hepify_max(max_heap, i);
    }
    for (let i = Math.floor(min_heap.length / 2) - 1; i >= 0; i--) {
        hepify_min(min_heap, i);
    }
    console.log(max_heap);
    console.log(min_heap);
}

function hepify_max(arr, index) {
    var l = index * 2 + 1;
    var r = index * 2 + 2;
    var largest = index;
    if (arr[l] > arr[largest]) {
        largest = l;
    }
    if (arr[r] > arr[largest]) {
        largest = r;
    }

    if (largest != index) {
        temp = arr[index];
        arr[index] = arr[largest];
        arr[largest] = temp;
        hepify_max(arr, largest);
    }
}

function hepify_min(arr, index) {
    var l = index * 2 + 1;
    var r = index * 2 + 2;
    var min = index;
    if (arr[l] < arr[min]) {
        min = l;
    }
    if (arr[r] < arr[min]) {
        min = r;
    }

    if (min != index) {
        temp = arr[index];
        arr[index] = arr[min];
        arr[min] = temp;
        hepify_min(arr, min);
    }
}

getMedian([1, 2, 3, 4, 5, 6, 7, 4, 2, 2, 2, 2]);