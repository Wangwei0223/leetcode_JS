/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 1026. Maximum Difference Between Node and Ancestor
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
    if(!root) return 0;
    let res = [];
    dfs(root, res);
    res.sort(function(a, b){
        return b - a;
    });
    
    return res[0];
};

// [最小, 最大]
var dfs = function(root, res){
    if(!root) return [Number.MAX_VALUE, -Number.MAX_VALUE];
    let linfo = dfs(root.left, res);
    let rinfo = dfs(root.right, res);
    let curMin = Math.min(root.val, rinfo[0], linfo[0]);
    let curMax = Math.max(root.val, rinfo[1], linfo[1]);
    
    res.push(Math.abs(root.val - curMin));
    res.push(Math.abs(root.val - curMax));
    
    return [curMin, curMax];
}