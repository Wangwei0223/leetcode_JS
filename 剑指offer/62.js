/**
 * 给定一棵二叉搜索树，请找出其中的第k小的结点。例如， （5，3，7，2，4，6，8）    中，按结点数值大小顺序第三小结点的值为4。
 * @param {*} pRoot 
 * @param {*} k 
 */
function KthNode(pRoot, k)
{
    if(pRoot == null || k == 0){
        return null;
    }
    //为了能追踪k，应该把KthNodeCore函数定义在这里面，k应该在KthNodeCore函数外面
    function KthNodeCore(pRoot){
        let target = null;
        if(pRoot.left != null){
            target = KthNodeCore(pRoot.left, k)
        }
        if(target == null){
            if(k == 1){
                target = pRoot;
            }
            k--; 
        }
        if(target == null && pRoot.right != null){
            target = KthNodeCore(pRoot.right, k);
        }
        return target;
    }
    return KthNodeCore(pRoot);
}