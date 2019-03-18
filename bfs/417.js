/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

// BFS
var pacificAtlantic = function(matrix) {
    if(matrix.length === 0 || matrix[0].length === 0) return [];
    let pacific = new Array(matrix.length), atlantic = new Array(matrix.length);
    for(let i = 0; i < matrix.length; i++){
        pacific[i] = new Array(matrix[0].length).fill(false);
        atlantic[i] = new Array(matrix[0].length).fill(false);
    }

    let p_queue = [], a_queue = [];
    for(let i = 0; i < matrix.length; i++){
        p_queue.push([i, 0]);
        a_queue.push([i, matrix[0].length - 1]);
        pacific[i][0] = true;
        atlantic[i][matrix[0].length - 1] = true;
    }

    for(let i = 0; i < matrix[0].length; i++){
        p_queue.push([0, i]);
        a_queue.push([matrix.length - 1, i]);
        pacific[0][i] = true;
        atlantic[matrix.length - 1][i] = true;
    }

    bfs(matrix, pacific, p_queue);
    bfs(matrix, atlantic, a_queue);

    let res = [];
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(pacific[i][j] && atlantic[i][j]) res.push([i, j]);
        }
    }
    
    return res;
};

var bfs = function(matrix, visit, queue){
    let dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    
    while(queue.length > 0){
        let cur = queue.shift();
        for(let i of dirs){
            let x = cur[0] + i[0], y = cur[1] + i[1];
            if(x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length && !visit[x][y] && matrix[x][y] >= matrix[cur[0]][cur[1]]){
                visit[x][y] = true;
                queue.push([x, y]);
            }
        }
    }   
}