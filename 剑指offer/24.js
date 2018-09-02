/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/**
 * 输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。(注意: 在返回值的list中，数组长度大的数组靠前)
 * @param {*} root 
 * @param {*} expectNumber 
 */
function FindPath(root, expectNumber)
{
    // write code here
    var res = [];
    backtracking(root, [], expectNumber, res);
    return res;
}

function backtracking(root, stack, expectNumber, res){
    if(root === null) return;
    stack.push(root.val);
    
    var temp = expectNumber - root.val;
    
    if(root.left==null && root.right==null && temp==0){
        res.push(stack.slice());
    }
    
    backtracking(root.left, stack, temp, res);
    backtracking(root.right, stack, temp, res);
    
    stack.pop();
}