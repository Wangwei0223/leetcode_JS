/**
 * 329. Longest Increasing Path in a Matrix
 * @param {number[][]} matrix
 * @return {number}
 */

// 对但超时版

var longestIncreasingPath = function(matrix) {
    if(matrix.length === 0) return 0;
    let visit = new Array(matrix.length), res = [0];
    for(let i = 0; i < visit.length; i++){
        visit[i] = new Array(matrix[0].length).fill(false);
    }
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            dfs(matrix, i, j, 0, visit, res);       
        }
    }
    return res[0];
};

var dfs = function(matrix, r, c, temp, visit, res){
    visit[r][c] = true;
    temp += 1; // 注意这种计数的, 不要用数组然后返回数组长度, 因为数组是引用类型,每一次递归操作的都是一个引用, 一直push, 不pop会乱, 直接用数字就行
    let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]], isEnd = true;
    for(let d of dirs){
        let nr = r + d[0], nc = c + d[1];
        if(nr < 0 || nc < 0 || nr >= matrix.length || nc >= matrix[0].length || visit[nr][nc] || matrix[nr][nc] >= matrix[r][c]) continue;
        dfs(matrix, nr, nc, temp, visit, res);
        isEnd = false;
    }
    
    visit[r][c] = false;
    if(isEnd) res[0] = Math.max(res[0], temp);
}

// memorized 版, 直接把visit改成dp, 记录到当前点的最大长度

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if(matrix.length === 0) return 0;
    let dp = new Array(matrix.length), res = 0;
    for(let i = 0; i < dp.length; i++){
        dp[i] = new Array(matrix[0].length).fill(0);
    }
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            res = Math.max(res, dfs(matrix, i, j, dp));   
        }
    }
    return res;
};

var dfs = function(matrix, r, c, dp){
    if(dp[r][c]) return dp[r][c]
    
    let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]], mx = 1;
    for(let d of dirs){
        let nr = r + d[0], nc = c + d[1];
        if(nr < 0 || nc < 0 || nr >= matrix.length || nc >= matrix[0].length || matrix[nr][nc] >= matrix[r][c]) continue;
        let len = 1 + dfs(matrix, nr, nc, dp);
        mx = Math.max(mx, len);
    }
    
    dp[r][c] = mx;
    
    return mx;
}