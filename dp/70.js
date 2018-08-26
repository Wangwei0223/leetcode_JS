/**70. Climbing Stairs
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    if(n === 2) return 2;
    var res = [1];
    res[1] = 2;
    for(let i = 2; i < n; i++){
        res[i] = res[i - 1] + res[i - 2];
    }
    return res[n - 1];
};