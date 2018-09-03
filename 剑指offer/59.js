/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/**
 * 请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。
 * @param {*} pRoot 
 */
function Print(pRoot)
{
    // write code here
    if (!pRoot) return [];
    var queue_ = [pRoot];
    var flag = true; //true 正向
    var res = [];
    while(queue_.length > 0){
        var len = queue_.length;
        var level = [];
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
        if(flag){
            res.push(level);
        }else{
            res.push(level.reverse());
        }
        flag = !flag;
    }
    return res;
}