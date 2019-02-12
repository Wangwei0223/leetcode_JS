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


/**
 * TrieTree  
 * */

class TrieNode {
    constructor() {
        this.path = 0; // 到达过这个节点次数, 求有多少个以xxx作为前缀
        this.end = 0; //以这个节点结尾
        this.nexts = new Map(); //<Char, TireNode>
        // 比如26个字母 如果存在一个节点到另一个节点的路, 路权值为26个字母之一, 把它加入map
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }

    insert(word){
        if(!word) return;
        let wordList = word.split(''); //转成数组
        let head = this.root;
        for(let i = 0; i < wordList.length; i++){
            if(!head.nexts.has(wordList[i])){
                head.nexts.set(wordList[i], new TrieNode());
            }
            head = head.nexts.get(wordList[i]);
            head.path++;
        }
        head.end++;
    }

    search(word){
        if(!word) return false;
        let wordList = word.split('');
        let head = this.root;
        for(let i = 0; i < wordList.length; i++){
            if(head.nexts.has(wordList[i])){
                head = head.nexts.get(wordList[i]);
            }else{
                return false;
            }
        }
        if(head.end === 0) return false;
        return true; // 返回个数就 return head.end
    }

    delete(word){
        if(!this.search(word)) return;
        let wordList = word.split('');
        let head = this.root;
        for(let i = 0; i < wordList.length; i++){
            head = head.nexts.get(wordList[i]);
            head.path--;
            if(head.path === 0){
                head.nexts = new Map();
                return;
            }
        }
        head.end--;
    }

    prefixNumber(pre){
        if(!pre) return 0;
        let wordList = word.split('');
        let head = this.root;
        for(let i = 0; i < wordList.length; i++){
            if(!head.nexts.has(wordList[i])){
                return 0;
            }
            head = head.nexts.get[wordList[i]];
        }

        return head.path;
    }    
}

