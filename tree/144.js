/**
 * 144. 二叉树的前序遍历
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
var preorderTraversal = function(root) {
    if(!root) return [];
    var stack_ = [root], res = [], cur = null;
    while(stack_.length > 0){
        cur = stack_.shift();
        res.push(cur.val);
        if(cur.right){
            stack_.unshift(cur.right);
        }
        if(cur.left){
            stack_.unshift(cur.left);
        }
    }
    return res;
};