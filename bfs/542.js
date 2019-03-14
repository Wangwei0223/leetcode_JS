/**
 * 542. 01 Matrix
 * @param {number[][]} matrix
 * @return {number[][]}
 */

// BFS
var updateMatrix = function(matrix) {
    let queue = [], dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] === 0) queue.push(new Point(i, j));
            else{
                matrix[i][j] = Number.MAX_VALUE;
            }
        }
    }
    
    while(queue.length > 0){
        let cur = queue.shift();
        for(let d of dir){
            let r = cur.r + d[0];
            let c = cur.c + d[1];
            if(r < 0 || c >= matrix[0].length || r >= matrix.length || c < 0 || matrix[r][c] <= matrix[cur.r][cur.c] + 1) continue;
            
            matrix[r][c] = matrix[cur.r][cur.c] + 1;
            queue.push(new Point(r, c));
        }
    }
    
    return matrix;
};


class Point{
    constructor(r, c){
        this.r = r;
        this.c = c;
    }
}