/**62. 不同路径
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // d[m][n] = d[m][n - 1] + d[m - 1][n];
    // d[m][0] = 1;
    // d[0][n] = 1;
    var dp = [];
    dp[0] = [];
    for(let o = 0; o < n; o++) dp[0][o] = 1;
    for(let i = 1; i < m; i++){
        dp[i] = [];
        dp[i][0] = 1;
        for(let j = 1; j < n; j++){
            dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
        }
    }
    return dp[m - 1][n - 1];
};

console.log(uniquePaths(7, 3));