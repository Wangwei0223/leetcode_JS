var count = 1;
var container = document.getElementById('container');

// 想鼠标键盘操作都会把e传到function中, return的function虽然没写参数, 但它是隐藏了e的, 要把这个隐藏的e保存, 传给本来要debounce的函数
function getUserAction(e) {
    container.innerHTML = count++;
    console.log(this);
    console.log(e);
};

// 第一种方法是使用时间戳
function throttle_(func, wait){
    let prev = 0;

    return function(){
        let now = + new Date();
        if(now - prev > wait){
            func.apply(this, arguments);
            prev = now;
        }
    }
}

function throttle(func, wait){
    let timeout, context, arg;
    return function(){
        context = this;
        arg = arguments;
        if(!timeout){
            timeout = setTimeout(function(){
                timeout = null;
                func.apply(context, arg);
            }, wait);
        }
    }
}

container.onmousemove = throttle(getUserAction, 1000);
