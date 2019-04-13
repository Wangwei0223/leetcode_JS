/**
 * 980. Unique Paths III
 * @param {number[][]} grid
 * @return {number}
 */
let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
var uniquePathsIII = function(grid) {
    let visit = new Array(grid.length).fill([]);
    let total = 0, start = [];
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] !== -1) total++;
            if(grid[i][j] === 1) {
                start = [i, j];
            }
        }
    }
    
    
    let res = [0]
    dfs(grid, start[0], start[1], res, total);
    return res[0];
};

// 当前不能在返回的点都要像染色法一样先染色
var dfs = function(grid, r, c, res, total){
    if(r >= grid.length || c >= grid[0].length || r < 0 || c < 0 || grid[r][c] === -1) return;
    total--;
    // if(total < 0) return; // 不需要
    if(grid[r][c] === 2){
        if(total === 0) res[0] += 1;
        return;
    }
    let temp = grid[r][c];
    grid[r][c] = -1;
    let nr, nc;
    for(let i of dirs){
        nr = r + i[0];
        nc = c + i[1];
        dfs(grid, nr, nc, res, total);
    }
    grid[r][c] = temp;
}