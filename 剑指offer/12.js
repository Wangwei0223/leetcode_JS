/**
 * 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
 * @param {*} base 
 * @param {*} exponent 
 */
function Power(base, exponent)
{
    // write code here
    if (exponent === 0) return 1;
    var result = 1, flag = false;
    if (exponent < 0) {
        exponent = Math.abs(exponent);
        flag = true;
    }

    while (exponent > 0) {
        result *= base;
        exponent--;
    }
    if (flag) result = 1 / result;
    return result;
}