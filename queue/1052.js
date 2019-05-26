/**
 * 1052. Grumpy Bookstore Owner
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, X) {
    let queue = [], ori = 0, s = 0, res = 0;
    for (let i = 0; i < X; i++) {
        queue.push(i);
        s += customers[i];
        ori += grumpy[i] === 0 ? customers[i] : 0;
    }
    let max = s - ori, max_ = X - 1;
    while(X < customers.length){
        let t = queue.shift();
        s -= customers[t];
        ori -= grumpy[t] === 0 ? customers[t] : 0;
        queue.push(X);
        s += customers[X];
        ori += grumpy[X] === 0 ? customers[X] : 0;
        if(s - ori > max){
            max = s - ori;
            max_ = X;
        }
        X++;
    }
    for(let i = 0; i < queue.length; i++){
        grumpy[max_ - i] = 0;
    }

    for(let i = 0; i < customers.length; i++){
        res += grumpy[i] === 0 ? customers[i] : 0;
    }
    
    return res;
};
let customers = [1, 0, 1, 2, 1, 1, 7, 5], grumpy = [0, 1, 0, 1, 0, 1, 0, 1], X = 3;
maxSatisfied(customers, grumpy, X);