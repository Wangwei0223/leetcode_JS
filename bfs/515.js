/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 515. Find Largest Value in Each Tree Row
 * @param {TreeNode} root
 * @return {number[]}
 */

// BFS
var largestValues = function(root) {
    if(!root) return [];
    let queue = [root], res = [];
    
    while(queue.length > 0){
        let len = queue.length, curMax = -Number.MAX_VALUE, cur;
        for(let i = 0; i < len; i++){
            cur = queue.shift();
            curMax = Math.max(curMax, cur.val);
            if(cur.left){
                queue.push(cur.left);
            }
            if(cur.right){
                queue.push(cur.right);
            }
        }
        res.push(curMax);
    }
    
    return res;
};