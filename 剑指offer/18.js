/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/**
 * 反转二叉树
 */
//非递归
function Mirror(root)
{
    // write code here
    var queue_ = [root];
    var cur;
    while(cur = queue_.shift()){ //不能用长度去判断不然一直有null
        var temp = cur.left;
        cur.left = cur.right;
        cur.right = temp;
        if(cur.left){
            queue_.push(cur.left);
        }
        if(cur.right){
            queue_.push(cur.right);
        }
    }
    return root;
}

//递归
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror_(root)
{
    // write code here
    if(!root) return null;
    
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    Mirror(root.left);
    Mirror(root.right);
    return root;
}