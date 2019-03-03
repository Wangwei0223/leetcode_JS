/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 112. Path Sum
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(!root) return false;
    let res = [];
    return dfs(root, 0, sum);
};

var dfs = function(root, cur, sum){
    if(!root) return false;
    cur += root.val;
    if(!root.left && !root.right){
        
        return sum === cur;
    }
    
    return dfs(root.left, cur, sum) || dfs(root.right, cur, sum);
}