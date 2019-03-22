/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 513. Find Bottom Left Tree Value
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    if(!root) return -1;
    let res = [root.val]
    dfs(root, 0, [-1], res);
    return res[0];
};


var dfs = function(node, level, max, res){
    if(!node) return;
    
    if(level > max[0]){
        max[0] = level;
        res[0] = node.val;
    }
    
    dfs(node.left, level + 1, max, res);
    dfs(node.right, level + 1, max, res);
    
}