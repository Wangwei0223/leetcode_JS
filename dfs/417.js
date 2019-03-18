/**
 * 417. Pacific Atlantic Water Flow
 * @param {number[][]} matrix
 * @return {number[][]}
 */

var pacificAtlantic = function(matrix){
    if(matrix.length === 0 || matrix[0].length === 0) return [];
    let pacific = new Array(matrix.length), atlantic = new Array(matrix.length);
    for(let i = 0; i < matrix.length; i++){
        pacific[i] = new Array(matrix[0].length).fill(false);
        atlantic[i] = new Array(matrix[0].length).fill(false);
    }
    
    for(let i = 0; i < matrix.length; i++){
        dfs(matrix, pacific, i, 0, -Number.MAX_VALUE);
        dfs(matrix, atlantic, i, matrix[0].length - 1, -Number.MAX_VALUE);
    }
    
    for(let j = 0; j < matrix[0].length; j++){
        dfs(matrix, pacific, 0, j, -Number.MAX_VALUE);
        dfs(matrix, atlantic, matrix.length - 1, j, -Number.MAX_VALUE);
    }
    
    let res = [];
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(pacific[i][j] && atlantic[i][j]) res.push([i, j]);
        }
    }
    
    return res;
}


var dfs = function(matrix, visit, r, c, pre){
    if(r < 0 || c < 0 || r >= matrix.length || c >= matrix[0].length || visit[r][c] || matrix[r][c] < pre) return;
    
    visit[r][c] = true;
    dfs(matrix, visit, r + 1, c, matrix[r][c]);
    dfs(matrix, visit, r - 1, c, matrix[r][c]);
    dfs(matrix, visit, r, c + 1, matrix[r][c]);
    dfs(matrix, visit, r, c - 1, matrix[r][c]);
}