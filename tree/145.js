/**
 * 145. 二叉树的后序遍历
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if(!root) return [];
    var res = [], stack_ = [root], pre_node = root, parent = null;
    while(stack_.length > 0){
        parent = stack_[0];
        if(parent.left && pre_node != parent.left && pre_node != parent.right){
            stack_.unshift(parent.left);
        }else if(parent.right && pre_node != parent.right){
            stack_.unshift(parent.right);
        }else{
            pre_node = stack_.shift();
            res.push(pre_node.val);
        }
        
    }
    return res;
};

// 用辅助栈 
// 前序遍历是当前, 当前右入栈, 当前左入栈 出栈顺序 左右中 现在改正 当前入栈, 左入栈, 右入栈, 出栈顺序 右左中
var postorderTraversal_ = function(root) {
    if(!root) return [];
    let cur, stack= [root], helper = [];
    while(stack.length > 0){
        cur = stack.pop();
        helper.push(cur.val);
        if(cur.left){
            stack.push(cur.left);
        }
        if(cur.right){
            stack.push(cur.right);
        }
    }
    return helper.reverse();
};