/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 * @param {*} root 
 */
function PrintFromTopToBottom(root)
{
    // write code here
    if(!root) return []; // 不写这个判错
    var queue = [root], res = [];
    while(queue.length > 0){
        var cur = queue.shift();
        res.push(cur.val);
        if(cur.left) queue.push(cur.left);
        if(cur.right) queue.push(cur.right);
    }
    return res;
}