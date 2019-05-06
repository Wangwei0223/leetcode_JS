/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 1038. Binary Search Tree to Greater Sum Tree
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    if(!root) return root;
    let node = root, stack = [];
    let curSum = 0;
    let sum = inorderTraversal(root);
    while(stack.length > 0 || node){
        if(node){
            stack.push(node);
            node = node.left;
        }else{
            node = stack.pop();
            let temp = node.val;
            node.val = sum - curSum;
            curSum += temp;
            node = node.right;
        }
        
    }
    
    return root;
};

var inorderTraversal = function(root) {
    if(!root) return [];
    let node = root, stack = [];
    let sum = 0;
    while(stack.length > 0 || node){
        if(node){
            stack.push(node);
            node = node.left;
        }else{
            node = stack.pop();
            sum += node.val;
            node = node.right;
        }
        
    }
    return sum;
};