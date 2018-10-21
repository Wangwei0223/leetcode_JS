async function testAsync1() {
    console.log("hello async");
    return 1; // 返回的是Promise resolve的参数 和 then一样 async返回的都是promise, promise什么状态和return的有关
}

let result1 = testAsync1();

console.log(result1);

result1.then(function(value){
    console.log(value);
});

console.log('end');

/**
 *  复习then的返回值 
 *  该方法返回一个新的Promise,该返回值与then方法中的回调函数的返回值有关
 *  如果返回的是一个值，那么返回的Promise将是接受状态(resolve),而且将返回的值作为接受状态的回调函数的参数值(resolve(returnData))
 */

let p = new Promise(function(r, j){
    // r('a');
    r(Promise.resolve('a')); // 都一样
}).then(function(value){
    console.log(value);
});

let p1 = p.then(function(value){
    return 'b'; 
}).then(function(value){
    console.log(value);
});;

let p2 = p.then(function (value) { 
    return Promise.resolve('b')
})

/**
 * p2.resolve(Promise.resolve('b'))
 */

console.log(p1);
console.log(p2);

// p1 p2 都是
/**
 *  Promise {<pending>}
    __proto__: Promise
    [[PromiseStatus]]: "resolved"
    [[PromiseValue]]: "b"
 */