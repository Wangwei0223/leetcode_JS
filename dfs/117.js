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

// DFS
// 有左有右, 直接左.next = 右, 右指向当前.neft的左
var connect = function(root){
    if(!root) return null;
    root.next = null;
    dfs(root);
    return root;
};

var dfs = function(root){
    if(!root) return;
    let next = root.next;
    while(next){
        if(next.left){
            next = next.left;
            break;
        }
        if(next.right){
            next = next.right;
            break;
        }
        next = next.next; //都没有再往右移
    }
    if(root.right) root.right.next = next;
    if(root.left) root.left.next = root.right ? root.right : next;
    
    // dfs要注意左右顺序, 必须先把右边连好了
    dfs(root.right);
    dfs(root.left);
}