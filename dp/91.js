/**91. 解码方法
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (!s.length) return 0;
    var dp = [];
    var n = s.length;
    dp[0] = 1;

    for (var i = 1; i <= n; i++) {
        dp[i] = 0;
        var sum1 = parseInt(s[i - 1]);
        var sum2 = parseInt(s[i - 2] + s[i - 1]);

        if (sum1 > 0 && sum1 < 10) {
            dp[i] += dp[i - 1];
        }
        if (sum2 > 9 && sum2 < 27) {
            dp[i] += dp[i - 2]; // 把当前和前一个当成一个整体 ,  所以是前两个的方法数直接加
        }
    }
    return dp[n];
};

console.log(numDecodings('10'));