/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 515. Find Largest Value in Each Tree Row
 * @param {TreeNode} root
 * @return {number[]}
 */

// DFS
var largestValues = function(root){
    if(!root) return [];
    let res = [];
    dfs(root, 0, res);
    return res;
}

var dfs = function(root, level, res){
    if(!root) return;
    // res[level] = !res[level] ? root.val : Math.max(res[level], root.val); 0 算 falsy 所以错了
    res[level] = res[level] === undefined ? root.val : Math.max(res[level], root.val);
    
    dfs(root.left, level + 1, res);
    dfs(root.right, level + 1, res);
}