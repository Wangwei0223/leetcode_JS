/**
 * 二叉树中序遍历
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var res = [], stack_ = [];
    var node = root;
    while(stack_.length > 0 || node !== null){
        if(node === null){
            node = stack_.shift();
            res.push(node.val);
            node = node.right;
        }else{
            stack_.unshift(node);
            node = node.left;
        }
    }
    return res;
}