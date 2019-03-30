// https://github.com/mqyqingfeng/Blog/issues/9
// JavaScript深入之闭包

var data = [];

for (var i = 0; i < 3; i++) {
    data[i] = function () {
        console.log(i);
    };
}

data[0]();
data[1]();
data[2]();

// 都是三

// 改正

var data_ = [];

for (var i = 0; i < 3; i++) {
    data_[i] = (function (i) { // 这里
        return function () { // 这里不写i, 不然是undefined
            console.log(i); // 这里与
        }
    })(i); // 和这里形成闭包
}

data_[0]();
data_[1]();
data_[2]();