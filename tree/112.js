/**
 * 112. 路径总和
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */

var res = [];

var hasPathSum = function(root, sum) {
    if(!root) return false;
    res = [];
    backTracking(root, [root], sum - root.val);
    return res.length > 0 ? true : false;
};

var backTracking = function(root, temp, sum) {
    if(sum === 0 && !root.left && !root.right){
        res.push(temp.slice());
        return;
    }
    if(!root.left && !root.right) return;
    if(root.left){
        temp.push(root.left.val);
        backTracking(root.left, temp, sum - root.left.val);
        temp.pop();
    }
    if(root.right){
        temp.push(root.right.val);
        backTracking(root.right, temp, sum - root.right.val);
        temp.pop();
    }
}