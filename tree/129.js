/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 129. Sum Root to Leaf Numbers
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    let res = [0];
    dfs(root, 0, res);
    return res[0];
};

var dfs = function(root, pre, res){
    if(!root) return;
    if(!root.left && !root.right){
        res[0] += pre*10 + root.val;
        return;
    }
    dfs(root.left, pre*10 + root.val, res);
    dfs(root.right, pre*10 + root.val, res);
}