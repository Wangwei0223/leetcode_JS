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

// preStart: 前序序列中的坐标(从前序序列的第几个开始找) inStart inEnd 中序序列中的开始节点和结束节点
function helper (preStart, inStart, inEnd, preorder, inorder){
    if (preStart > preorder.length - 1 || inStart > inEnd) {
        return null
    }
    var root = new TreeNode(preorder[preStart]);
    var inIndex = 0;
    for (let i = inStart; i <= inEnd; i++) {
        if (inorder[i] === root.val) {
            inIndex = i; // 找到当前节点在中序中的位置, 为的是分割左右子树
        }
    }
    root.left = helper(preStart + 1, inStart, inIndex - 1, preorder, inorder); //左子树在前序序列中的位置就是当前位置+1
    root.right = helper(preStart + inIndex - inStart + 1, inIndex + 1, inEnd, preorder, inorder); //右子树在前序序列的位置需要算, 要把左子树的先腾出来
    /**
     * 如何从前序序列中找右子树的位置:
     * 以 5, 3, 8, 6为例
     * (inIndex - inStart) 3前面有几个数(3左子树节点个数)
     * preStart + (inIndex - inStart): 3 + 3的左子树的个数
     * preStart + (inIndex - inStart) + 1: 下一个就是3右子树的位置
     */
    return root;
}