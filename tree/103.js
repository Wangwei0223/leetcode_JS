/**
 * 二叉树的锯齿形层次遍历
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
var queue = [];
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    var res = [];
    queue = [root];
    var flag = true;
    while(queue.length > 0){
        var level = [];
        var len = queue.length; //左的左或者右的右
        queue.reverse();
        for(let i = 0; i < len ;i++){
            var temp = queue.shift();
            level.push(temp.val);
            helper(temp, flag);
            
        }   
        flag = !flag;
        res.push(level);   
    }
    return res;
};


var helper = function(node, flag){
    if(flag){
        if(node.left){
            queue.push(node.left);
        }
        if(node.right){
            queue.push(node.right);
        }  
    }else{
        if(node.right){
            queue.push(node.right);
        }
        if(node.left){
            queue.push(node.left);
        }
    }
}