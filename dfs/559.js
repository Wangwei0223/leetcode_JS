/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * 559. Maximum Depth of N-ary Tree
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    let maxDepth = [0];
    dfs(root, 1, maxDepth);
    return maxDepth[0];
};

var dfs = function(root, depth, maxDepth){
    if(!root) return;
    if(root.children.length === 0){
        maxDepth[0] = Math.max(maxDepth[0], depth);
        return;
    }
    
    for(let i of root.children){
        dfs(i, depth + 1, maxDepth);
    }
}