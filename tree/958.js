/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// 第一次出现只存在左不存在右或者第一次出现左右都没有的情况
// 标记leaf = true 说明之后的所有节点都必须是叶子节点
// 右存在而左不存在的时候直接返回false

var isCompleteTree = function(root) {
    if(!root) return true;
    let leaf = false, queue = [root], cur;
    while(queue.length > 0){
        cur = queue.shift();
        if(leaf && (cur.left || cur.right) || cur.right && !cur.left){
            return false;
        }
        
        if(cur.left){
            queue.push(cur.left);
        }
        
        if(cur.right){
            queue.push(cur.right);
        }
        
        // 第一次出现只存在左不存在右或者第一次出现左右都没有的情况
        if(cur.left && !cur.right || !cur.left && !cur.right){
            leaf = true;
        }
    }
    return true;
};