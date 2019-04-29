/**
 * 1034. Coloring A Border
 * @param {number[][]} grid
 * @param {number} r0
 * @param {number} c0
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function (grid, r0, c0, color) {
    let visit = new Array(grid.length).fill([]);

    for (let i = 0; i < visit.length; i++) {
        visit[i] = new Array(grid[0].length).fill(false);
    }

    let b = [];

    dfs(grid, visit, r0, c0, b);
    for (let i of b) {
        grid[i[0]][i[1]] = color;
    }

    return grid;
};

var dfs = function (grid, visit, r, c, b) {
    if (isB(grid, r, c)) {
        b.push([r, c]);
    }
    let dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    for (let i of dirs) {
        let nr = r + i[0], nc = c + i[1];
        if (nr < 0 || nc < 0 || nr >= grid.length || nc >= grid[0].length || grid[nr][nc] !== grid[r][c] || visit[nr][nc]) {
            continue;
        }
        visit[nr][nc] = true;
        dfs(grid, visit, nr, nc, b);
    }
}

var isB = function(grid, r, c){
    if(r === grid.length - 1 || r === 0 || c === 0 || c === grid[0].length - 1){
        return true;
    }
    
    let dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    for(let i of dirs){
        let nr = r + i[0], nc = c + i[1];
        if(nr < 0 || nc < 0 || nr >= grid.length || nc >= grid[0].length){
            continue;
        }
        if(grid[nr][nc] !== grid[r][c]){
            return true;
        }
    }
    return false;
}

let grid = [[1, 2, 1, 2, 1, 2], [2, 2, 2, 2, 1, 2], [1, 2, 2, 2, 1, 2]], r0 = 1, c0 = 3, color = 1;
console.log(colorBorder(grid, r0, c0, color));