/**
 * 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
    n<=39
 * @param {*} n 
 */
function Fibonacci(n)
{
    // write code here
    if (n <= 0) {
        return 0;
    }
    else if (n <= 2) {
        return 1;
    }
    var arr = [0];
    arr[1] = 1;
    arr[2] = 1;
    
    for(let i = 3; i <= n; i++){
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
}