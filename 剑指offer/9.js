/**
 * 变态跳台阶, 能条N级
 * @param {*} number 
 */
function jumpFloorII(number)
{
    // write code here
    if(number <= 0) return 0;
    if(number === 1) return 1;
    if(number === 2) return 2;
    var arr = [0, 1, 2];
    // arr[n] = 2*arr[n - 1];
    /**
     *  a[n]=a[n-1]+a[n-2]+......+a[1];..........................①
        a[n-1]=        a[n-2]+......+a[1];..........................②
        两式相减：a[n]=2*a[n-1];
     */
    for(let i = 3; i <= number; i++){
        arr[i] = 2*arr[i - 1];
    }
}

console.log(jumpFloorII(3));