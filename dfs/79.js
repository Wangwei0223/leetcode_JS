/**
 * 79. Word Search
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if(board.length === 0 || word.length === 0) return false;
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(dfs(i, j, board, 0, '', word)){
                return true;
            }
        }
    }
    return false;
};

var dfs = function(i, j, board, idx, cur, word){
    if(idx === word.length) return true; // 注意这里这条判断一定写在下一行的前面, 最后一个idx才满足的话, i, j其实都已经越界
    if(i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] === '#') return false;
    let c = board[i][j];
    cur += c;
    if(cur !== word.slice(0, idx + 1)) return false;
    board[i][j] = '#';
    let res = dfs(i + 1, j, board, idx + 1, cur, word) ||
    dfs(i - 1, j, board, idx + 1, cur, word) ||
    dfs(i, j + 1, board, idx + 1, cur, word) ||
    dfs(i, j - 1, board, idx + 1, cur, word);
    board[i][j] = c;
    return res;
}