/**
 * 664. Strange Printer
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s){
    let dp = new Array(s.length).fill([]);
    for(let i = 0; i < s.length; i++){
        dp[i] = new Array(s.length).fill(0);
    }
    
    return dfs(dp, s, 0, s.length - 1);
}

var dfs = function(dp, s, i, j){
    if(i > j) return 0;
    if(dp[i][j] === 0){
        let ans = dfs(dp, s, i + 1, j) + 1;
        for(let k = i + 1; k <= j; k++){
            if(s[i] === s[k]){
                ans = Math.min(ans, dfs(dp, s, i, k - 1) + dfs(dp, s, k + 1, j));
            }
        }
        dp[i][j] = ans;
    }
    return dp[i][j];
}