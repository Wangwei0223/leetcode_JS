/**
 * 63. 不同路径 II
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid[0][0] === 1 || obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1] === 1)return 0;
    var dp = [];
    //dp[n][m] = d[n][m - 1] + d[n - 1][m]
    var index = obstacleGrid[0].length;
    dp[0] = [];
    for(let m = 0; m < obstacleGrid[0].length; m++){
        if(obstacleGrid[0][m] === 1){
            index = m;
        }
        if(m > index){
            dp[0][m] = 0;
        }else{
            dp[0][m] = 1;
        }
    }
    var index_n = obstacleGrid.length;
    for(let n = 1; n < obstacleGrid.length; n++){
        dp[n] = [];
        if(obstacleGrid[n - 1][0] === 1){
            index_n  = n - 1;
        }
        if(n > index_n){
            dp[n][0] = 0;
        }else{
            dp[n][0] = 1;   
        }
        for(let m = 1; m < obstacleGrid[0].length; m++){
            if(obstacleGrid[n][m-1] === 1 && obstacleGrid[n - 1][m] === 0){
                dp[n][m] = dp[n - 1][m];
            }
            else if(obstacleGrid[n][m-1] === 0 && obstacleGrid[n - 1][m] === 1){
                dp[n][m] = dp[n][m - 1]
            }
            else if(obstacleGrid[n][m-1] === 0 && obstacleGrid[n - 1][m] === 0){
                dp[n][m] = dp[n][m - 1] + dp[n - 1][m];   
            }else{
                dp[n][m] = 0;
            }
        }
    }
    return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};