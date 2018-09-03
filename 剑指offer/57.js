/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
/**
 * 给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。
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