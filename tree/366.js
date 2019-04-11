/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 366. Find Leaves of Binary Tree
 * @param {TreeNode} root
 * @return {number[][]}
 */

// 其实就是求当前节点所在高度

var findLeaves = function(root) {
    if(!root) return [];
    let res = [];
    dfs(root, res);
    return res;
};


var dfs = function(root, res){
    if(!root) return 0;
    
    let curDepth = Math.max(dfs(root.left, res), dfs(root.right, res));
    
    if(res[curDepth] === undefined){
        res[curDepth] = new Array();
    }
    
    res[curDepth].push(root.val);
    
    return curDepth + 1;
}