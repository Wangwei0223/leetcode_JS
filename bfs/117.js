/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * 117. Populating Next Right Pointers in Each Node II
 * @param {Node} root
 * @return {Node}
 */

// BFS
var connect = function(root) {
    if(!root) return null;
    
    let queue = [root];
    
    while(queue.length > 0){
        let len = queue.length;
        let level = [];
        for(let i = 0; i < len; i++){
            let cur = queue.shift();
            level.push(cur);
            if(cur.left){
                queue.push(cur.left);
            }

            if(cur.right){
                queue.push(cur.right);
            }
            if(level.length > 1){
                level[level.length - 2].next = level[level.length - 1];
            }
        }
        level[level.length - 1].next = null;
    }
    
    return root;
};