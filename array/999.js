/**
 * 999. Available Captures for Rook
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    if(board.length === 0) return 0;
    let queue = [], count = 0, cur = null, len = 0;
    
    // find rock
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] === 'R'){ // only white rock
                queue.push([i, j]);
                break;
            }
        }
    }
    
    if(queue.length === 0) return 0; // no white rock
    
    cur = queue.shift();
    let i = cur[0], j = cur[1];
    while(i - 1 >= 0){ // up
        if(board[i - 1][j] === 'p'){ //eat;
            count++;
            break;
        }else if(board[i - 1][j] === 'B'){
            break;
        }
        i--;
    }
    i = cur[0], j = cur[1];
    while(i + 1 < board.length){ // down
        if(board[i + 1][j] === 'p'){ //eat;
            count++;
            break;
        }else if(board[i + 1][j] === 'B'){
            break;
        }
        i++;
    }
    i = cur[0], j = cur[1];
    while(j + 1 < board[0].length){ // right
        if(board[i][j + 1] === 'p'){ //eat;
            count++;
            break;
        }else if(board[i][j + 1] === 'B'){
            break;
        }
        j++;
    }
    i = cur[0], j = cur[1];
    while(j - 1 >= 0){ // left
        if(board[i][j - 1] === 'p'){ //eat;
            count++;
            break;
        }else if(board[i][j - 1] === 'B'){
            break;
        }
        j--;
    }
    
    return count;
};