/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let frist = {root: null}, second = {root: null}, pre = {root: new TreeNode(-Number.MAX_VALUE)}; // 注意引用类型
    
    dfs(root, pre, frist, second);

    [frist.root.val, second.root.val] = [second.root.val, frist.root.val];
};

var dfs = function(root, pre, frist, second){
    if(!root) return;
    dfs(root.left, pre, frist, second);
    
    if(!frist.root && pre.root.val >= root.val){
        frist.root = pre.root;
    }
    
    if(frist.root && pre.root.val >= root.val){
        second.root = root;
    }
    
    pre.root = root;
    
    dfs(root.right, pre, frist, second);
}