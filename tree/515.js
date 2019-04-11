/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 515. Find Largest Value in Each Tree Row
 * @param {TreeNode} root
 * @return {number[]}
 */

// BFS
var largestValues_ = function(root) {
    if(!root) return [];
    let queue = [root], res = [];
    
    while(queue.length > 0){
        let len = queue.length, curMax = -Number.MAX_VALUE, cur;
        for(let i = 0; i < len; i++){
            cur = queue.shift();
            curMax = Math.max(curMax, cur.val);
            if(cur.left){
                queue.push(cur.left);
            }
            if(cur.right){
                queue.push(cur.right);
            }
        }
        res.push(curMax);
    }
    
    return res;
};


// DFS
var largestValues = function(root){
    if(!root) return [];
    let res = [];
    dfs(root, 0, res);
    return res;
}

var dfs = function(root, level, res){
    if(!root) return;
    // res[level] = !res[level] ? root.val : Math.max(res[level], root.val); 0 算 falsy 所以错了
    res[level] = res[level] === undefined ? root.val : Math.max(res[level], root.val);
    
    dfs(root.left, level + 1, res);
    dfs(root.right, level + 1, res);
}