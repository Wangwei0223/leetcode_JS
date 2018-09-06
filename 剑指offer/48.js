/**
 * 求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
 * @param {*} n 
 */

function Sum_Solution(n)
{
    // write code here
    return n&&Sum_Solution(n-1) + n; //用&&判断0终止
}