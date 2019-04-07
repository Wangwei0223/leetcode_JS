/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    return inorder(root);
};


// 复习一下中序遍历
var inorder = function(root){
    let stack = [], node = root, res = null, pre;
    
    while(stack.length > 0 || node){
        if(node === null){
            node = stack.pop();
            if(!pre){
                pre = new TreeNode(node.val);
                res = pre;
            }else{
                let newNode = new TreeNode(node.val);
                pre.right = newNode;
                pre = newNode;
            }
            node = node.right;
        }else{
            stack.push(node);
            node = node.left;
        }
    }
    return res;
}