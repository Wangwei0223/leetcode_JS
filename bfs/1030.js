/**
 * 1030. Matrix Cells in Distance Order
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
    let visit = new Array(R).fill([]);
    for(let i = 0; i < R; i++){
        visit[i] = new Array(C).fill(false);
    }
    visit[r0][c0] = true;
    let queue = [[r0, c0]], res = [], dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    while(queue.length > 0){
        let cur = queue.shift();
        res.push(cur);
        for(let i of dir){
            let nr = cur[0] + i[0];
            let nc = cur[1] + i[1];
            if(nr >= 0 && nr < R && nc >= 0 && nc < C && !visit[nr][nc]){
                queue.push([nr, nc]);
                visit[nr][nc] = true;
            }
        }
    }
    
    return res;
};