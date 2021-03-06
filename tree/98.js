/**
 * 98. 验证二叉搜索树
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
var isValidBST = function(root) {
    var node = root;
    var arr = [];
    var res = [];
    var flag = true;
    while(arr.length > 0 || node!==null){
        if(node === null){
            node = arr.shift();
            res.push(node.val);
            node = node.right;
        }else{
            arr.unshift(node);
            node = node.left;
        }
    }
    
    for(let i = 1 ; i < res.length ; i++){
        if(res[i] <= res[i - 1]){
            flag = false;
            break;
        }
    }
    
    return flag;
};

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
var isValidBST = function(root) {
    if(!root) return true;
    let stack = [], cur = root, res = [];
    while(stack.length > 0 || cur){
        if(cur){
            stack.push(cur);
            cur = cur.left;
        }else{
            cur = stack.pop();
            if(res.length > 0 && cur.val <= res[res.length - 1]){
                return false;
            }
            res.push(cur.val);
            cur = cur.right;
        }
    }
    return true;
};