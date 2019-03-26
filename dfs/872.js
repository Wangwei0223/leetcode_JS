/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 872. Leaf-Similar Trees
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let res1 = [], res2 = [];
    dfs(root1, res1);
    dfs(root2, res2);
    return res1.toString() === res2.toString();
};


var dfs = function(root, res){
    if(!root.left && !root.right){
        res.push(root.val);
    }
    
    if(root.left) dfs(root.left, res);
    if(root.right) dfs(root.right, res);
}