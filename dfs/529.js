/**
 * 529. Minesweeper
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */


var updateBoard = function(board, click) {
    if(board[click[0]][click[1]] === 'M'){
        board[click[0]][click[1]] = 'X';
        return board;
    }
    dfs(board, click[0], click[1]);
    return board;
};

// 边上有雷就不递归了
var dfs = function(board, r, c){
    let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [-1, -1], [1, -1], [-1, 1]];
    let neighbor = [];
    let count = 0;
    for(let i of dirs){
        let new_r = r + i[0];
        let new_c = c + i[1];
        if(new_r < 0 || new_c < 0 || new_r >= board.length || new_c >= board[0].length) continue;
        if(board[new_r][new_c] === 'E'){
            neighbor.push([new_r, new_c]); //只有E才去递归
        }else if(board[new_r][new_c] === 'M'){
            count++;
        }
    }
    board[r][c] = count > 0 ? '' + count : 'B';
    // 确保是B才去递归
    if(count === 0){
        for(let i of neighbor){
            dfs(board, i[0], i[1]);
        }   
    }
}