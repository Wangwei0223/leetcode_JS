// //加入2个nextTick()的回调函数
// process.nextTick(function () {
//     console.log("nextTick延迟执行1");
// });

// process.nextTick(function () {
//     console.log("nextTick延迟执行2");
// });
// //加入两个setImmediate()回调函数
// setImmediate(function () {
//     console.log("setImmediate延迟执行1");
//     process.nextTick(function () {
//         console.log("强势插入");
//     });
// });
// setImmediate(function () {
//     console.log("setImmediate延迟执行2");
// });
// console.log("正常执行");

//加入2个nextTick()的回调函数
process.nextTick(function(){
    console.log("nextTick延迟执行A");
});
process.nextTick(function(){
    console.log("nextTick延迟执行B");
    setImmediate(function(){
        console.log("setImmediate延迟执行C");
    });
    process.nextTick(function(){
        console.log("nextTick延迟执行D");
    });
});


//加入两个setImmediate()回调函数
setImmediate(function(){
    console.log("setImmediate延迟执行E");
    process.nextTick(function(){
        console.log("强势插入F");
    });
    setImmediate(function(){
        console.log("setImmediate延迟执行G");
    });
});
setImmediate(function(){
    console.log("setImmediate延迟执行H");
    process.nextTick(function(){
        console.log("强势插入I");
    });
    process.nextTick(function(){
        console.log("强势插入J");
    });
    setImmediate(function(){
        console.log("setImmediate延迟执行K");
    });
});
console.log("正常执行L");