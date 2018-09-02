/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/**
 * 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
 * @param {*} pRoot1 
 * @param {*} pRoot2 
 */

function HasSubtree(pRoot1, pRoot2){
    // write code here
    if(!pRoot2) return false;
    if(!pRoot1) return false;
    var res = false;
    if(pRoot1.val === pRoot2.val){
        res = isSameTree(pRoot1, pRoot2);
    }
    if(!res){
        res = HasSubtree(pRoot1.left, pRoot2);
    }
    if(!res){
        res = HasSubtree(pRoot1.right, pRoot2);
    }
    return res;
}

function isSameTree(p, q){
    if(!q)return true; // 判断子结构, 不一定向判断全部都一样, q可以为null, 是个包含关系
    if(!p)return false;
    if(p.val !== q.val) return false;
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}