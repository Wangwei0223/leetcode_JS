async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {  // async 返回的是Promise的处理结果 还不是return Promise.resolve(), 虽然能得到相同的效果 真正的感觉是resolve(Promise.resolve())
    console.log('async2');
    return 'async2 return';
    // 所以，当await操作符后面的表达式是一个Promise的时候，它的返回值，实际上就是Promise的回调函数resolve的参数
}

console.log('script start');

setTimeout(function () {
    console.log('setTimeout');
}, 0);

async1();

new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
})

console.log('script end');

/**
 * 1. script start setTimeout放到宏队列末尾
 * 2. async1 start 执行aysnc2并且等async2状态改变, async2状态改变在微队列末尾
 * 3. async2
 * 4. promise1 resolve状态改变在微队列末尾, 排在了async2后面
 * 5. script end 开始扫微队列
 * 6. async1 end 等到了 await async2
 * 7. 微队列还剩promise 2输出
 * 8. setTimeout
 */