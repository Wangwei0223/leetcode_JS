/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/**
 * 平衡二叉树
 * @param {*} pRoot 
 */
function IsBalanced_Solution(pRoot)
{
    // write code here
    if(pRoot === null) return true;
    if(Math.abs(height(pRoot.left) - height(pRoot.right)) > 1) return false;
    else{
        return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right); // 子树也要满足
    }
    
}

function height(root){
    if(root === null) return 0;
    return 1 + Math.max(height(root.left), height(root.right));
}