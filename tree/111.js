/**
 * 111. Minimum Depth of Binary Tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0;
    let queue = [root], cur, depth = 1, length;
    while(queue.length > 0){
        length = queue.length;
        for(let i = 0; i < length; i++){
            cur = queue.shift();
            if(!cur.left && !cur.right) return depth;
            if(cur.left){
                queue.push(cur.left);
            }
            if(cur.right){
                queue.push(cur.right);
            }
        }
        depth++;
    }
};