/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    if(!root) return 0;
    let res = {val: -Number.MAX_VALUE};
    dfs(root, res);
    return res.val;
};


var dfs = function(node, res){
    if(!node) return 0;
    let left = Math.max(0, dfs(node.left, res));
    let right = Math.max(0, dfs(node.right, res));
    
    let total = node.val + left + right;
    
    res.val = Math.max(res.val, total);
    
    return node.val + Math.max(left, right);
}