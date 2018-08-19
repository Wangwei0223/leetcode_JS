/**
 * 107. 二叉树的层次遍历 II
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
var levelOrderBottom = function(root) {
    var queue = [];
    if(root){
        queue.push(root);   
    }
    var res = [];
    while(queue.length > 0){
        var level = [];
        var len = queue.length;
        for(let i = 0; i < len; i++){
            var current = queue.shift();
            level.push(current.val);
            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right);
            }
            
        }
        res.push(level);
    }
    
    return res.reverse();
};