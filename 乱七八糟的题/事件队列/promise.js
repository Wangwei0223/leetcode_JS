new Promise(function(r, j){
    console.log(1);
    r('asd');
    throw new Error('SSS');
}).then(function(r){
    console.log(r);
    throw new Error('asdad');
}, function(err){
    console.log('this is' + err);
}).then(function(r){
    console.log(r);
}, function(e) {
    console.log('this is ' + e);
});
