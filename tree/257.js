/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 257. Binary Tree Paths
 * @param {TreeNode} root
 * @return {string[]}
 */

// 必须回到root才记录
var binaryTreePaths = function(root) {
    if(!root) return [];
    let path = "", res = [];
    
    dfs(root, path, res);
    
    return res;
};


var dfs = function(root, path, res){
    if(!root) return;
    
    path = path + '->' + root.val;
    
    if(!root.left && !root.right){ // 叶子节点
        res.push(path.slice(2));
        return;
    }
    
    dfs(root.left, path, res);
    dfs(root.right, path, res);
}