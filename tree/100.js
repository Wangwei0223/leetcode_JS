/**
 * 100. 相同的树
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var res_p;
var res_q;
var isSameTree = function(p, q) {
    if (!p && !q) return true; // p q 同时为空
    if (!p || !q) return false; // 一方为空, 因为双方为空已经判断完了
    if (p.val !== q.val) return false; // val不等

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
