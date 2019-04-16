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
function debounce__(func, wait) {
    var timeout;
    return function () {
        var context = this, args = arguments; // this 是 container, arguments 是 e
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

// 第三版 考虑立即执行 + 取消
function debounce(func, wait, immediate){
    let timeout, result;

    let debounced = function(){
        let context = this, args = arguments;
        if(timeout) clearTimeout(timeout);
        if(immediate){
            // 执行过就不再执行
            let callNow = !timeout;
            timeout = setTimeout(function(){
                timeout = null;
            }, wait); // 间隔wait之后 timeout才会变为null, callNow才会变为true
            if(callNow) result = func.apply(context, args);
        }else{
            timeout = setTimeout(function(){
                func.apply(context, args);
            }, wait);
        }
        return result;
    }

    debounced.cancel = function(){
        clearTimeout(timeout);
        timeout = null;
    }

    return debounced;
}

container.onmousemove = debounce(getUserAction, 1000, true);
