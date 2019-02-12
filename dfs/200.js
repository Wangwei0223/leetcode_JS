/**
 * 岛问题
 * 200. Number of Islands
 */

/**
* @param {character[][]} grid
* @return {number}
*/

var numIslands = function (grid) {
    if (grid.length === 0 || grid[0].length === 0) return 0;

    let n = grid[0].length, m = grid.length, res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                dfs(grid, i, j);
                res++;
            }
        }
    }

    return res;
};

var dfs = function (grid, m, n) {
    let row = grid.length;
    let col = grid[0].length;
    if (n < 0 || m < 0 || m >= row || n >= col || grid[m][n] === '0') {
        return;
    }

    grid[m][n] = '0';
    dfs(grid, m + 1, n);
    dfs(grid, m, n + 1);
    dfs(grid, m - 1, n);
    dfs(grid, m, n - 1);
}