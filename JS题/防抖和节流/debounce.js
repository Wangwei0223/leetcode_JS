var count = 1;
var container = document.getElementById('container');

// 第一版: 没考虑 this 和 event
function debounce_(func, wait) {
    var timeout;
    return function () {
        clearInterval(timeout);
        timeout = setTimeout(func, wait);
    }
}

// 第二版: 考虑 this 和 event
function debounce(func, wait) {
    var timeout;
    return function () {
        var context = this, args = arguments; // this 是 container 
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            func.apply(context, args);
        }, wait);
    }
}

// 想鼠标键盘操作都会把e传到function中, return的function虽然没写参数, 但它是隐藏了e的, 要把这个隐藏的e保存, 传给本来要debounce的函数
function getUserAction(e) {
    container.innerHTML = count++;
    console.log(this);
    console.log(e);
};

container.onmousemove = debounce(getUserAction, 1000);