/**
 * 找数量过半数的数字
 * @param {*} numbers 
 */
function MoreThanHalfNum_Solution(numbers) {
    // write code here
    // 找数量过半数的数字 最极端的情况就是 1, 2, 3, 2, 4, 2, 5, 2 所以可以采用如下方法
    // 必须大于1/2 length 等于都不行, 等于的时候是找不到 [1, 2, 3, 2, 4, 2, 5, 2]
    var res = numbers[0], time = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (time === 0) {
            res = numbers[i];
            time++;
        }
        else if (numbers[i] === res) {
            time++;
        } else {
            time--;
        }
    }
    var time = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === res) {
            time++;
        }
    }
    if (time * 2 > numbers.length) return res;
    return 0;
}

console.log(MoreThanHalfNum_Solution([1, 2, 3, 2, 4, 2, 5, 2, 2]));