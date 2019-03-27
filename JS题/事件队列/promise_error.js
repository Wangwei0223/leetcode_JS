new Promise(function(r, j){
    console.log(1);
    r('asd');
    throw new Error('SSS');
}).then(function(r){
    console.log(r);
    throw new Error('AAA'); // 在下一个then被catch了
    return 'cc'; // 不会走
}, function(err){
    console.log('Second function catch this is: ' + err);
}).then(function(r){
    console.log(r); // 上一个then 出错了 下一个then被catch
}, function(e) {
    console.log('this is ' + e);
}).catch(function(err){
    console.log('catch catched: ' + err);
});