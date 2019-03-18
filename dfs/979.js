/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 979. Distribute Coins in Binary Tree
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function(root) {
    if(!root) return 0;
    let res = [0];
    dfs(root, res);
    return res[0];
};

var dfs = function(root, res){
    //返回我可以提供给parent的
    if(!root) return 0; //两不相欠
    
    root.val += (dfs(root.left, res) + dfs(root.right, res));
    
    if(root.val <= 0){
        res[0] += (1 - root.val);
        return -1 + root.val;
    }else{
        res[0] += (root.val - 1);
        return root.val - 1;
    }
    
}