/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向
 */

function Convert(pRootOfTree)
{
    // write code here
    if(pRootOfTree == null) return null;
    let pLast = null;
    pLast = Traverse(pRootOfTree,pLast);
    let pHead = pLast;
    while(pHead && pHead.left){
        pHead = pHead.left;
    }
    return pHead;
}

function Traverse(node, pLast){
    if(node === null) return;
    if(node.left){
        pLast = Traverse(node.left,pLast);
    }
    node.left = pLast;
    if(pLast){
        pLast.right = node;
    }
    pLast = node;
    if(node.right){
        pLast = Traverse(node.right,pLast);
    }
    return pLast;
}