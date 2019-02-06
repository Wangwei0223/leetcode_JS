/**
 * 222. Count Complete Tree Nodes
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 低于O(N)

var countNodes = function(root) {
    if(!root) return 0;
    let leftHeight = 1 + getHeightleft(root.left), rightHeight = 1 + getHeightright(root.right);
    // 往左走到头的高度不等于往右走到头, 说明不是完全二叉树 递归左 递归右
    if(leftHeight !== rightHeight){
        return 1 + countNodes(root.left) + countNodes(root.right);
    }else{
        return (1 << leftHeight) - 1;        
    }

};


var getHeightleft = function(root){
    if(!root) return 0;
    return 1 + getHeightleft(root.left);
}

var getHeightright = function(root){
    if(!root) return 0;
    return 1 + getHeightright(root.right);
}