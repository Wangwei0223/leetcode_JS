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
 * Leetcode 144 二叉树前序遍历 非递归
 */
var preorderTraversal = function(root) {
    if(!root) return [];
    let res = [], stack = [], node = root, cur;
    stack.push(node);
    while(stack.length > 0){
        cur = stack.pop();
        res.push(cur.val);
        if(cur.right){
            stack.push(cur.right);
        }
        if(cur.left){
            stack.push(cur.left);
        }
    }
    return res;
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
 * @return {number[]}
 * Leetcode 94 二叉树中序非递归
 * 当前节点为空: 栈中去一个打印, 指向当前右. 当前不为空, 压栈, 指向当前左
 */
var inorderTraversal = function(root) {
    if(!root) return [];
    let node = root, stack = [], res = [];
    while(stack.length > 0 || node){
        if(node){
            stack.push(node);
            node = node.left;
        }else{
            node = stack.pop();
            res.push(node.val);
            node = node.right;
        }
        
    }
    return res;
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
 * @return {number[]}
 * Leetcode 144 二叉树后序非递归
 */
var postorderTraversal = function(root) {
    if(!root) return [];
    let parent, pre_node, stack = [root], res = [];
    while(stack.length > 0){
        parent = stack[stack.length - 1];
        // 后两个不满足说明, 是第三次经过parent. 改弹出parent了, 走else
        if(parent.left && parent.left !== pre_node && parent.right !== pre_node){
            stack.push(parent.left);
        }else if(parent.right && parent.right !== pre_node){
            stack.push(parent.right);
        }else{
            pre_node = stack.pop();
            res.push(pre_node.val);
        }
    }
    return res;
};

/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
/**
 * 二叉树的后一个节点
 * 思路: 这个节点有右子树, 右子树的第一个节点(最左的). 这个节点没有右子树, 往上找找到一个节点x(x可能是自己, 从自己开始找), 这个x是x父亲的左节点, 返回x的父亲
 * @param {*} pNode 
 */
function GetNext(pNode)
{
    // write code here
   if(!pNode)return null;
   if(pNode.right != null){ //第1种
        pNode = pNode.right;
        while(pNode.left != null){
            pNode = pNode.left;
        }
        return pNode;
    }
    while(pNode.next != null){ //第2种 无右, 找到第一个是父亲是爷爷的左节点
        if(pNode == pNode.next.left){ 
            return pNode.next;
        }
        pNode = pNode.next;
    }
    return null;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 * Leetcode 297 二叉树序列化反序列化
 */
var serialize = function(root) {
    if(!root) return '#!';
    let res = root.val + '!';
    res += serialize(root.left);
    res += serialize(root.right);
    return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let arr = data.split('!'), queue = [];
    for(let i = 0; i < arr.length; i++){
        queue.push(arr[i]);
    }
    return reconPreOrder(queue);
};

var reconPreOrder = function(arr){
    if(arr.length === 0) return null;
    let val = arr.shift();
    if(val === '#') return null;
    let node = new TreeNode(parseInt(val));
    node.left = reconPreOrder(arr);
    node.right = reconPreOrder(arr);   
    return node;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


/**
 * 110. Balanced Binary Tree
 */
class ReturnData{
    constructor(isB, h){
        this.isB = isB;
        this.h = h;
    }
}

var processor = function(node){
    if(!node) return new ReturnData(true, 0);
    
    let left = processor(node.left);
    
    if(!left.isB) return new ReturnData(false, 0);
    
    let right = processor(node.right);
    
    if(!right.isB) return new ReturnData(false, 0);
    
    if(Math.abs(left.h - right.h) > 1) return new ReturnData(false, 0);
    
    return new ReturnData(true, Math.max(left.h, right.h) + 1);
}

var isBalanced = function(root){
    return processor(root).isB;
}

