/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 199. Binary Tree Right Side View
 * @param {TreeNode} root
 * @return {number[]}
 */

// DFS
// 覆盖的思想
var rightSideView = function(root){
    if(!root) return [];
    let res = [];
    dfs(root, res, 0);
    return res;
}

var dfs = function(root, res, depth){
    if(!root) return;
    res[depth] = root.val;
    dfs(root.left, res, depth + 1);
    dfs(root.right, res, depth + 1); //右边如果有, 必定覆盖左边
}