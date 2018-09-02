/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/**
 * 
输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
 * @param {*} pre 
 * @param {*} vin 
 */
function reConstructBinaryTree(pre, vin)
{
    // write code here
    return helper(0, 0, vin.length - 1, pre, vin);
}

function helper (preStart, inStart, inEnd, preorder, inorder){
    if (preStart > preorder.length - 1 || inStart > inEnd) {
        return null
    }
    var root = new TreeNode(preorder[preStart]);
    var inIndex = 0;
    for (let i = inStart; i <= inEnd; i++) {
        if (inorder[i] === root.val) {
            inIndex = i;
        }
    }
    root.left = helper(preStart + 1, inStart, inIndex - 1, preorder, inorder);
    root.right = helper(preStart + inIndex - inStart + 1, inIndex + 1, inEnd, preorder, inorder);
    
    return root;
}