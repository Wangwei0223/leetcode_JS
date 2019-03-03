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
 * 116. Populating Next Right Pointers in Each Node
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return null;
    let queue = [root], res = [], len = 0, cur = null;
    while(queue.length > 0){
        len = queue.length;
        res = [];
        for(let i = 0; i < len; i++){
            cur = queue.shift();
            if(res.length > 0){
                res[res.length - 1].next = cur;
            }
            res.push(cur);
            
            if(cur.left){
                queue.push(cur.left);
            }
            
            if(cur.right){
                queue.push(cur.right);
            }
        }
        res[res.length - 1].next = null;
    }
    
    return root;
};