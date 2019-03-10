/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function(N) {
    let pre = -1, o, A, B = N - 1;
    let temp = [], pre1;
    for(let i = 0; i < N - 1; i++){
        o = op(i);
        if(pre === -1){
            A = N;
        }else{
            A = pre;
        }
        if(o === '+'){
            pre1 = pre;
            temp.push(pre);
            temp.push(B);
        }else if(o === '-'){
            pre = B;
        }else{
            pre = cal(A, B, o);
        }
        B--;
    }

    if(pre1 !== pre) temp.push(pre);
    
    if(temp.length === 0) return 1;
    console.log(temp);

    let idx = 0, pre2 = temp[0];
    while(idx + 1 < temp.length){
        if(idx % 2 === 0){
            pre2 = cal(pre2, temp[idx + 1], '+');
        }else{
            pre2 = cal(pre2, temp[idx + 1], '-');
        }
        idx++;
    }

    return pre2;
};


var op = function(num){
    let cur = num % 4;
    let res;
    switch(cur){
        case 0:
            res = '*';
            break;
        case 1:
            res = '/';
            break;
        case 2:
            res = '+';
            break;
        case 3:
            res = '-';
            break;
    }
    
    return res;
}

var cal = function(A, B, op){
    let res;
    switch(op){
        case '*':
            res = A*B;
            break;
        case '/':
            res = parseInt(A / B);
            break;
        case '+':
            res = A + B;
            break;
        case '-':
            res = A - B;
            break;
    }
    return res;
}

console.log(clumsy(1));