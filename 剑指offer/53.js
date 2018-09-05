//s字符串
/**
 * 判断字符串是数字
 * @param {*} s 
 */
function isNumeric(s)
{
    // write code here
    return s.match(/[+-]?\d*(\.\d*)?([eE][+-]?\d+)?/g)[0]==s;
}