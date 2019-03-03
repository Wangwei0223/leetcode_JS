/**
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

//BFS
var rightSideView_ = function(root) {
    if(!root) return [];
    let queue = [root], len = 0, res = [], cur = null;
    while(queue.length > 0){
        len = queue.length;
        for(let i = 0; i < len; i++){
            cur = queue.shift();
            
            if(cur.left){
                queue.push(cur.left);
            }
            
            if(cur.right){
                queue.push(cur.right);
            }
            
            if(i === len - 1){
                res.push(cur.val);
            }
        }
    }
    
    return res;
};


// DFS
// 覆盖的思想
var rightSideView = function(root){
    if(!root) return [];
    let res = [];
    dfs(root, res, 0);
    return res;
}

var dfs = function(root, res, depth){
    if(!root) return;
    res[depth] = root.val;
    dfs(root.left, res, depth + 1);
    dfs(root.right, res, depth + 1); //右边如果有, 必定覆盖左边
}