/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
 * @param {*} pRoot 
 */
function Print(pRoot)
{
    // write code here
    if(!pRoot) return [];
    var queue_ = [pRoot];
    var res = [];
    while(queue_.length > 0){
        var level = [];
        var len = queue_.length;
        while(level.length < len){
            var cur = queue_.shift();
            level.push(cur.val);
            if(cur.left){
                queue_.push(cur.left);
            }
            if(cur.right){
                queue_.push(cur.right);
            }
        }
        res.push(level);
    }
    return res;
}