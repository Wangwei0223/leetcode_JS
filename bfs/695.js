/**
 * 695. Max Area of Island
 * @param {number[][]} grid
 * @return {number}
 */

// BFS
var maxAreaOfIsland = function(grid) {
    if(grid.length === 0) return 0;
    let queue = [], res = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === 1){
                grid[i][j] = '#';
                queue.push([i, j]);
                res = BFS(queue, grid, res);
            }
        }
    }
    
    return res;
};
    
    
var BFS = function(queue, grid, res){
    let area = 0;
    while(queue.length > 0){
        let len = queue.length;
        for(let i = 0; i < len; i++){
            let cur = queue.shift();
            area++;
            let row = cur[0], col = cur[1];
            if(row + 1 < grid.length && grid[row + 1][col] === 1){
                grid[row + 1][col] = '#';
                queue.push([row + 1, col]);
            }
            
            if(row - 1 >= 0 && grid[row - 1][col] === 1){
                grid[row - 1][col] = '#';
                queue.push([row - 1, col]);
            }
            
            if(col + 1 < grid[0].length && grid[row][col + 1] === 1){
                grid[row][col + 1] = '#';
                queue.push([row, col + 1]);
            }
            
            if(col - 1 >= 0 && grid[row][col - 1] === 1){
                grid[row][col - 1] = '#';
                queue.push([row, col - 1]);
            }
        }
    }
    
    return Math.max(res, area);
}