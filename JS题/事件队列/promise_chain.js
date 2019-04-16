function taskA() {
    console.log("Task A");
}
function taskB() {
    console.log("Task B");
}
function onRejected(error) {
    console.log("Catch Error: A or B", error);
}
function finalTask() {
    console.log("Final Task");
}

var promise = Promise.resolve();
promise.then(taskA).then(taskB).catch(onRejected).then(finalTask);


// 1: 对同一个promise对象同时调用 `then` 方法 多个then返回不同的promise 多个then 几乎同时, 无顺序
var aPromise = new Promise(function (resolve) {
    resolve(100);
});

// 第二个then能不能获取第一个then的error, 看你怎么抛了
aPromise.then(function (value) {
    console.log('0:' + value);
    return value * 2;
}).then(function(value){
    console.log('二级then', value);
});
aPromise.then(function (value) {
    console.log('2:' + value);
    return value * 2;
});
aPromise.then(function (value) {
    console.log("1: " + value); // => 100
    // throw new Error('new err');
    return Promise.reject(new Error('then error'));
}).then(function(){

}, function(err){
    console.log('catched err:' + err);
}).catch(function (err) { 
    console.log('new err', err);
 });
