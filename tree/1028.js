/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 1028. Recover a Tree From Preorder Traversal
 * @param {string} S
 * @return {TreeNode}
 */

/*
    用栈的方法实在是太巧了,
    1-2--3--4-5--6--7
    先算level, 再算数 (颠倒当然也可以)
    当前level = 0, num = 1
    stack为空, 没parent(parent是stack最后一个)
    level <= stack.length 不用退栈
    1 入栈
    
    level = 1, num = 2
    stack.length = 1 level <= stack.length 不用退栈
    2 入栈
    
    level = 2, num = 3
    stack.length = 2 level <= stack.length 不用退栈
    3 入栈
    
    level = 2, num = 4
    stack.length = 3 level <= stack.length 3退栈
    此时2为 4 的parent (stack最后一位)
    4 入栈
    
    level = 1, num = 5 
    stack.length = 3 level <= stack.length 4, 2退栈
    此时1为 5 的parent (stack最后一位)
    5 入栈
    
    
    原理, 相同level只存一个, 一直退, 最后一位的level一定是新来的节点 -1 一定是新来的点的parent
*/
var recoverFromPreorder = function(S) {
    if(S.length === 0) return [];
    let idx = 0, stack = [];
    while(idx < S.length){
        // 得到当前level
        let level = 0, num = "";
        while(idx < S.length && S[idx] === '-'){
            level++;
            idx++;
        }
        // 得到当前num
        while(idx < S.length && S[idx] !== '-'){
            num+=S[idx];
            idx++;
        }
        
        num = parseInt(num);
        
        // stack.length > level的话退栈
        while(stack.length > level){
            stack.pop();
        }
        
        let newNode = new TreeNode(num);
        
        if(stack.length > 0){
            let parent = stack[stack.length - 1];
            if(!parent.left){
                parent.left = newNode;
            }else{
                parent.right = newNode;
            }
        }
        
        stack.push(newNode);
    }
    
    return stack[0];
};
