/**
 * 998. Maximum Binary Tree II
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

var insertIntoMaxTree = function(root, val) {
    if(root !== null && root.val > val){
        root.right = insertIntoMaxTree(root.right, val);
        return root;
    }
    let node = new TreeNode(val);
    node.left = root;
    return node;
};