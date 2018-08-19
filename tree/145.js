/**
 * 145. 二叉树的后序遍历
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
var postorderTraversal = function(root) {
    if(!root) return [];
    var res = [], stack_ = [root], pre_node = root, parent = null;
    while(stack_.length > 0){
        parent = stack_[0];
        if(parent.left && pre_node != parent.left && pre_node != parent.right){
            stack_.unshift(parent.left);
        }else if(parent.right && pre_node != parent.right){
            stack_.unshift(parent.right);
        }else{
            pre_node = stack_.shift();
            res.push(pre_node.val);
        }
        
    }
    return res;
};