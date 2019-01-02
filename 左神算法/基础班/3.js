/**
 * 定义数据结构
 * let obj = {
    '0': [max, min, false] // 桶0的最大值, 最小值, boolean表示有没有数, false代表没有数
}
 *  
 */

/**
 * 给定一个数组, 找出数组排序后相邻两数的最大差值要求时间复杂度O(n)
 * [3, 1, 6, 2, 7] 排序后[1, 2, 3, 6, 7]相邻最大差值就是3
 * N个数, N+1个桶, 保证有一个空桶, 空桶的存在使得最大值只存在与不同桶, 不在同桶内
 * @param {*} arr 
 */
function findMaxGap(arr) {
    if (!arr || arr.length < 2) return 0;
    let len = arr.length;
    let min = Number.MAX_VALUE, max = Number.MIN_VALUE;
    for (let i = 0; i < len; i++) {
        min = Math.min(min, arr[i]);
        max = Math.max(max, arr[i]);
    }
    if (min === max) return 0;
    let max_value = [], min_value = [], has_value = []; // 长度都是N+1. 表示0号桶到N号桶的3个信息

    let bid, res = 0; //res没非负
    // 分配桶
    for (let i = 0; i < len; i++) {
        bid = bucket(arr[i], max, min, len);
        min_value[bid] = has_value[bid] ? Math.min(arr[i], min_value[bid]) : arr[i];
        max_value[bid] = has_value[bid] ? Math.max(arr[i], max_value[bid]) : arr[i];
        has_value[bid] = true;
    }
    let lastMax = max_value[0]; // 记录上一个最大值
    for (let i = 1; i <= len; i++) { //注意是N+1个桶
        if (has_value[i]) { // 跳过空桶
            res = Math.max(res, min_value[i] - lastMax); // 全局变量记录最大值
            lastMax = max_value[i]; // 更新上一个最大值
        }
    }
    return res;
}

/**
 * num归属于几号桶
 * @param {*} num 
 * @param {*} max 
 * @param {*} min 
 * @param {*} len 
 */
function bucket(num, max, min, len) {
    return parseInt((num - min) * len / (max - min));
}

let arr_1 = [3, 1, 6, 2, 7];

console.log(findMaxGap(arr_1));

console.log('======模拟实现栈======');
console.log('======使用built-in函数======');
let arr = [], arr_ = [];
Array.prototype.push_ = function (num) {
    this[this.length] = num;
}

Array.prototype.pop_ = function () {
    if (this.length === 0) {
        return undefined;
    }
    let res = this[this.length - 1];
    this.splice(this.length - 1, 1);
    return res;
}

arr.push({ 'name': 'wei' });
arr_.push_({ 'name': 'wei' });
console.log(arr, arr_);
console.log(arr.pop(), arr_.pop_());
console.log(arr.pop(), arr_.pop_());
console.log(arr, arr_);

console.log('======不使用built-in函数, 用单指针和max size模拟======');
class Stack{
    constructor(num){
        if(num < 0) throw 'size must > 0';
        this.max = num;
        this.index = 0; // index就是要push的位置
        this.arr = [];
    }

    push(obj){
        if(this.index === this.max) return;
        this.arr[this.index++] = obj;
    }

    pop(){
        if(this.index === 0) return undefined;
        return this.arr[--this.index]; // index - 1是要pop的位置
    }

}

let stack = new Stack(3);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
stack.push(5);
stack.push(6);
console.log(stack);

console.log('======模拟实现队列======');
console.log('======使用built-in函数======');
Array.prototype.shift_ = function () { // 内置的unshift返回的是数组长度
    if (this.length === 0) return undefined;
    return this.splice(0, 1)[0]; // splice返回值是数组
}

let arr2 = [1, 2, 3];
console.log(arr2.shift_(), arr2);
console.log('======不使用built-in函数, 用双指针和记录当前的size模拟======');
class Queue{
    constructor(num){
        if(num < 0) throw 'size mush > 0';
        this.max = num; // 约束整个队列大小
        this.start = 0;
        this.end = 0;
        this.size = 0; // 当前的size
        this.arr = [];
    }

    push(obj){
        if(this.size === this.max) return 'Queue is full';
        this.arr[this.end++] = obj;
        this.size++;
        if(this.end === this.max) this.end = 0;
    }

    poll(){
        if(this.size === 0) return undefined;
        let res = this.arr[this.start++];
        this.size--;
        if(this.start === this.max) this.start = 0;
        return res;
    }
}

let queue_ = new Queue(3);

queue_.push(1);
queue_.push(2);
console.log(queue_);
console.log(queue_.poll());
console.log(queue_.poll());
queue_.push(3);
queue_.push(4);
queue_.push(5);
queue_.push(6);
console.log(queue_.poll());
console.log(queue_.poll());
console.log(queue_.poll());
console.log(queue_.poll());
console.log(queue_);