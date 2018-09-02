/**
 * 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
 * @param {*} number 
 */

function rectCover(number)
{
    // write code here
    if(number <= 0) return 0;
    if(number === 1) return 1;
    if(number === 2) return 2;
    var arr = [0, 1, 2];
    for(let i = 3; i <= number; i++){
        arr[i] = arr[i - 2] + arr[i - 1];
    }
    return arr[number];
}