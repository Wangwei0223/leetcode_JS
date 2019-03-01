/**
 * 695. Max Area of Island
 * @param {number[][]} grid
 * @return {number}
 */

// DFS
var maxAreaOfIsland = function(grid) {
    if(grid.length === 0) return 0;
    let res = {count: 0}, area = {count: 0};
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === 1){
                area.count = 0; 
                DFS(grid, i, j, res, area);
            }
        }
    }
    
    return res.count;
};


var DFS = function(grid, i, j, res, area){
    // 这是一种必须严格前后顺序的写法, i不存在的话直接访问 grid[i][j] 报错, 因为undefined没有[j], 所以grid[i]判断必须写前面
    if (!grid[i] || !grid[i][j] || grid[i][j] !== 1) return;
    grid[i][j] = '#';
    area.count++;
    res.count = Math.max(res.count, area.count);
    DFS(grid, i + 1, j, res, area);
    DFS(grid, i - 1, j, res, area);
    DFS(grid, i, j + 1, res, area);
    DFS(grid, i, j - 1, res, area);
}

let grid = [[1, 2, 3]];