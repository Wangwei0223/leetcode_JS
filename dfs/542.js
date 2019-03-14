/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

// DFS

var updateMatrix = function(matrix) {
    if(matrix.length === 0) return null;
    
    let visit = [];
    for(let i = 0; i < matrix.length; i++){
        visit[i] = [];
    }
    
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            matrix[i][j] = matrix[i][j] === 0 ? 0 : Number.MAX_VALUE;
        }
    }
    
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] !== 0 && !visit[i][j]){
                dfs(matrix, i, j, visit);
            }
        }
    }
    
    return matrix;
};

// 这个点, 走几步, 到0
// 从 上 下 左 右 取信息
var dfs = function(matrix, i, j, visit){
    //不能!matrix[i] || !matrix[i][j] 因为这个题特殊 0也是 falsy
    if( i<0 ||i >= matrix.length || j < 0 || j >= matrix[0].length) return Number.MAX_VALUE;; // 直接!matrix[i][j]会报错, i不存在就没有matrix[i][j]
    
    if(visit[i][j]) return matrix[i][j];
    
    visit[i][j] = true;
    
    if(i - 1 >= 0) matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j]);
    
    if(i + 1 < matrix.length) matrix[i][j] = Math.min(matrix[i + 1][j] + 1, matrix[i][j]);
    
    if(j + 1 < matrix[0].length) matrix[i][j] = Math.min(matrix[i][j + 1] + 1, matrix[i][j]);
    
    if(j - 1 >= 0) matrix[i][j] = Math.min(matrix[i][j - 1] + 1, matrix[i][j]);
    
    let min = Math.min(dfs(matrix, i - 1, j, visit), dfs(matrix, i + 1, j, visit), dfs(matrix, i ,j + 1, visit), dfs(matrix, i, j - 1, visit)) + 1;
	
    matrix[i][j] = Math.min(matrix[i][j], min);
    
    return matrix[i][j];
}