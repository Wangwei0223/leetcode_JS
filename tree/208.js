/**
 * 208. Implement Trie (Prefix Tree)
 * Initialize your data structure here.
 */

var TrieNode = function(){
    this.path = 0;
    this.end = 0;
    this.nexts = new Map();
}


var Trie = function() {
    this.root = new TrieNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if(!word) return;
    let wordList = word.split('');
    let head = this.root;
    for(let i = 0; i < wordList.length; i++){
        if(!head.nexts.has(wordList[i])){
            head.nexts.set(wordList[i], new TrieNode());
        }
        head = head.nexts.get(wordList[i]);
        head.path++;
    }
    head.end++;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
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
    
    return true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    if(!prefix) return false;
    let wordList = prefix.split('');
    let head = this.root;
    for(let i = 0; i < wordList.length; i++){
        if(head.nexts.has(wordList[i])){
            head = head.nexts.get(wordList[i]);
        }else{
            return false;
        }
    }
    
    return true;
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */