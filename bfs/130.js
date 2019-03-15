/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// BFS
// 思路 找到最外圈的 0, BFS
// BFS和DFS的第一步最重要, 从哪开始BFS
// DFS有循环递归的情况

var solve = function(board) {
    if(board.length === 0) return [];
    let queue = [];
    for(let i = 0; i < board.length; i++){
        if(board[i][0] === 'O') {
            queue.push([i, 0]);
        }
        if(board[i][board[i].length - 1] === 'O'){
            queue.push([i, board[i].length - 1]);   
        }
    }
    
    for(let i = 1; i < board[0].length - 1; i++){
        if(board[0][i] === 'O'){
            queue.push([0, i]);
        }
        
        if(board[board.length - 1][i] === 'O'){
            queue.push([board.length - 1, i]);
        }
    }
    
    let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    while(queue.length > 0){
        let cur = queue.shift();
        board[cur[0]][cur[1]] = '#';
        for(let i of dirs){
            let r = cur[0] + i[0];
            let c = cur[1] + i[1];
            if(r < 0 || c < 0 || r >= board.length || c >= board[0].length || board[r][c] === 'X' || board[r][c] === '#') continue;
            queue.push([r, c]);
        }
    }
    
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] === '#') board[i][j] = 'O';
            else if(board[i][j] === 'O') board[i][j] = 'X';
        }
    }
    
    return board;
};

    
    