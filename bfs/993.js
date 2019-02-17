/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 * 993. Cousins in Binary Tree
 */
var isCousins = function(root, x, y) {
    if(!root) return false;
    let sequence = levelOrder(root);
    let idx = sequence.indexOf(x), idy = sequence.indexOf(y);
    if(parseInt((idx - 1) / 2) === parseInt((idy - 1) / 2)) return false; // same parent
    let hx = 0, hy = 0;
    while(idx > 0){
        hx++;
        idx = parseInt((idx - 1) / 2);
    }
    
    while(idy > 0){
        hy++;
        idy = parseInt((idy - 1) / 2);
    }
    
    return hx === hy;
};


var levelOrder = function(root) {
    if(!root) return [];
    let queue = [root], res = [root.val], cur = null, len = 0, index = 0;
    while(queue.length > 0){
        len = queue.length;
        for(let i = 0; i < len; i++){
            cur = queue.shift();
            index = res.indexOf(cur.val);
            if(cur.left){
                queue.push(cur.left);
                res[index*2 + 1] = cur.left.val;
            }
            if(cur.right){
                queue.push(cur.right);
                res[index*2 + 2] = cur.right.val;
            }
        }
    }
    
    return res;
};