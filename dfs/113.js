/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 113. Path Sum II
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if(!root) return [];
    let res = [], stack = [];
    dfs(root, sum, stack, res);
    return res;
};


var dfs = function(root, sum, stack, res){
    if(sum - root.val === 0 && !root.left && !root.right){
        stack.push(root.val);
        res.push(stack.slice());
        stack.pop();
    }else{
        if(root.left){
            stack.push(root.val);
            dfs(root.left, sum - root.val, stack, res);
            stack.pop();
        }
        
        if(root.right){
            stack.push(root.val);
            dfs(root.right, sum - root.val, stack, res);
            stack.pop();
        }
    }
}