/** 
 * 994. Rotting Oranges
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    if(grid.length === 0) return 0;
    let queue = [], count = 0, cur = null, minute = -1, len = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === 2){
                queue.push([i, j]);
            }
            if(grid[i][j] === 1){
                count++;
            }
        }
    }
    
    if(count === 0) return 0;
    
    while(queue.length > 0){
        len = queue.length;
        for(let k = 0; k < len; k++){
            cur = queue.shift();
            let i = cur[0], j = cur[1];
            if(i - 1 >= 0 && grid[i - 1][j] === 1){
                grid[i - 1][j] = 2;
                count--;
                queue.push([i - 1, j]);
            }
            if(i + 1 < grid.length && grid[i + 1][j] === 1){
                grid[i + 1][j] = 2;
                count--;
                queue.push([i + 1, j]);
            }
            if(j + 1 < grid[0].length && grid[i][j + 1] === 1){
                grid[i][j + 1] = 2;
                count--;
                queue.push([i, j + 1]);
            }
            if(j - 1 >= 0 && grid[i][j - 1] === 1){
                grid[i][j - 1] = 2;
                count--;
                queue.push([i, j - 1]);
            }   
        }
        minute++;
    }
    
    if(count > 0) return -1;
    
    return minute;
    
};

