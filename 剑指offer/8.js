/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
 * @param {*} number 
 */
function jumpFloor(number)
{
    // write code here
    if(number <= 0) return 0;
    if(number === 1) return 1;
    if(number === 2) return 2;
    var arr = [0, 1, 2];
    for(let j = 3; j <= number; j++){
        arr[j] = arr[j - 1] + arr[j - 2];
    }
    return arr[number];
}

console.log(jumpFloor(3));