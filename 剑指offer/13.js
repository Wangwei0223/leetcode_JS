/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 * @param {*} array 
 */
function reOrderArray(array)
{
    // write code here
    array.sort(function(a, b){
        if(a % 2 === 0 && b % 2 !== 0) return 1; //sort()得到的参数为正数时才交换两个值的顺序，否则不交换
        return -1;
    });
    
    return array;
}