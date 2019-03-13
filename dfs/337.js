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


// DFS
var rob = function(root) {
    if(!root) return 0;
    
    let include = root.val;
    let exclude = 0;
    
    if(root.left && root.left.left){
        include += rob(root.left.left);
    }
    
    if(root.left && root.left.right){
        include += rob(root.left.right);
    }
    
    if(root.right && root.right.left){
        include += rob(root.right.left);
    }
    
    if(root.right && root.right.right){
        include += rob(root.right.right);
    }
    
    exclude += rob(root.left);
    exclude += rob(root.right);
    
    return Math.max(include, exclude);
};