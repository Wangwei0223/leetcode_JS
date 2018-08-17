/**
 * 102. 二叉树的层次遍历
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    var res = [], queue = [], cur = null, len;
    queue.push(root);
    while(queue.length > 0){
        len = queue.length;
        var level = [];
        for(let i = 0; i < len; i++){
            cur = queue.shift();
            level.push(cur.val);
            if(cur.left){
                queue.push(cur.left);
            }
            if(cur.right){
                queue.push(cur.right);
            }            
        }
        res.push(level);
    }
    return res;
};