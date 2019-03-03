/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 199. Binary Tree Right Side View
 * @param {TreeNode} root
 * @return {number[]}
 */

//BFS

var rightSideView = function(root) {
    if(!root) return [];
    let queue = [root], len = 0, res = [], cur = null;
    while(queue.length > 0){
        len = queue.length;
        for(let i = 0; i < len; i++){
            cur = queue.shift();
            
            if(cur.left){
                queue.push(cur.left);
            }
            
            if(cur.right){
                queue.push(cur.right);
            }
            
            if(i === len - 1){
                res.push(cur.val);
            }
        }
    }
    
    return res;
};