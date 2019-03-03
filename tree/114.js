/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 114. Flatten Binary Tree to Linked List
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function(root) {
    if(!root) return null;
    
    dfs(root);
    
    return root;
};

/*
 思路:左边最右下面接上右边的头
      左边置null,
      左边头放到右边
      返回 当前节点作为头, 右边最右节点
*/

var dfs = function(root){
    if(!root){
        return new ReturnData(null, null);
    }
    
    let left_flat =  dfs(root.left);
    let right_flat = dfs(root.right);
    
    // 左边没有才是真正不操作直接返回, 所以这里要写判断右
    if(!right_flat.head){
        right_flat.head = null; // 因为39行要接right.head, right_head = null, 不等于null的话会在39行多接一个节点
        right_flat.rightMost = root;
    }
    
    if(!left_flat.head) {
        return new ReturnData(root, right_flat.rightMost);
    }
    
    left_flat.rightMost.right = right_flat.head;
    if(!right_flat.head) right_flat.rightMost = left_flat.rightMost; // 就卡在这里了!!!! 用例: [1,2,null,3]
    
    root.left = null;
    root.right = left_flat.head;
    
    return new ReturnData(root, right_flat.rightMost);
}

class ReturnData{
    constructor(head, rightMost){
        this.head = head;
        this.rightMost = rightMost;
    }
}