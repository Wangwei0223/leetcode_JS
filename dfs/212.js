/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    if(board.length === 0 || words.length === 0) return [];
    let tire = new TrieTree(), res = [];
    for(let i = 0; i < words.length; i++){
        tire.insert(words[i]);
    }
    
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            dfs(i, j, board, tire.root, res);
        }
    }
    
    return res;
    
};

var dfs = function(i, j, board, node, res){
    if(i < 0 || i >= board.length || j < 0 || j >= board[0].length) return;
    let c = board[i][j];
    if(c === '#' || !node.nexts.has(c)){
        return;
    }
    
    if(node.nexts.get(c).word !== null) {
        res.push(node.nexts.get(c).word);
        node.nexts.get(c).word = null;
    }
    board[i][j] = '#';
    dfs(i + 1, j, board, node.nexts.get(c), res);
    dfs(i - 1, j, board, node.nexts.get(c), res);
    dfs(i, j + 1, board, node.nexts.get(c), res);
    dfs(i, j - 1, board, node.nexts.get(c), res);
    board[i][j] = c;
}

class TrieNode{
    constructor(){
        this.path = 0;
        this.end = 0;
        this.nexts = new Map();
        this.word = null;
    }
}

class TrieTree{
    constructor(){
        this.root = new TrieNode();
    }
    
    insert(word){
        if(!word) return;
        let node = this.root, wordList = word.split('');
        for(let i = 0; i < wordList.length; i++){
            if(!node.nexts.has(wordList[i])){
                node.nexts.set(wordList[i], new TrieNode());
            }
            node = node.nexts.get(wordList[i]);
            node.path++;
        }
        node.end++;
        node.word = word;
    }
}