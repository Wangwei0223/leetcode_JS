/**
 * 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。
 * @param {*} numbers 
 */
var res;

function PrintMinNumber(numbers) {
    // write code here
    res = [];
    var used = [];
    dfp(numbers, [], []);
    res.sort(function (a, b) {
        return a - b;
    })
    return res[0];
}

function dfp(numbers, stack, used) {
    if (stack.length === numbers.length) {
        res.push(+stack.join(''));
        return res;
    }

    for (let i = 0; i < numbers.length; i++) {
        if (used.indexOf(i) !== -1) continue;
        stack.push(numbers[i]);
        used.push(i);
        dfp(numbers, stack, used);
        stack.pop();
        used.pop();
    }
}

console.log(PrintMinNumber([3, 32, 321]));