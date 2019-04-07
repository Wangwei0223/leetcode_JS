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
var sumRootToLeaf = function(root) {
    let res = [0];
    
    dfs(root, 0, res);
    
    return res[0];
};

var dfs = function(root, pre, res){
    if(!root) return;
    let cur = (pre * 2 + root.val) % (Math.pow(10, 9)+ 7);
    pre = cur;
    if(!root.left && !root.right){
        res[0] += cur;
        res[0] %= (Math.pow(10, 9)+ 7);
        return;
    }
    dfs(root.left, pre, res);
    dfs(root.right, pre, res); 
}