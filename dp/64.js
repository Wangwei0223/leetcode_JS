/**64. 最小路径和
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var m = grid[0].length;
    var n = grid.length;
    var dp = [];
    for(let i = 0; i < n; i++){
        dp[i] = [];
        for(let j = 0; j < m; j++){
            if(i === 0){
                if(j === 0) dp[i][j] = grid[0][0];
                else{
                    dp[i][j] = dp[i][j - 1] + grid[i][j];
                }
            }
            if(i > 0 && j === 0){
                dp[i][j] = dp[i - 1][j] + grid[i][j]
            }
            
            if(i > 0 && j > 0){
                dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j-1]);
            }
        }
    }
    return dp[n - 1][m - 1];
};

console.log(minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]));