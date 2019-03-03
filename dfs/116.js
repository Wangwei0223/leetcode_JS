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
//dfs
var connect = function(root){
    if(!root) return root;
    
    root.next = null;
    dfs(root);
    
    return root;
}

var dfs = function(root){
    if(!root.left && !root.right) return;
    
    let temp = root;
    let prev = null;
    while (temp != null){
        if (prev != null){
            prev.next = temp.left;
        }
        temp.left.next = temp.right; // 也就是完全二叉树可以这么写, 不然要考虑不存在情况
        prev = temp.right;
        temp = temp.next; // 不好想
    }
    
    dfs(root.left);
}
