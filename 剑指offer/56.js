/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
/**
 * 删除链表中的重复节点
 * @param {*} pHead 
 */
function deleteDuplication(pHead)
{
    // write code here
    if(!pHead || !pHead.next) return pHead;
    let Head = new ListNode(0);//重要，方便处理第一个、第二个节点就是相同的情况。
    Head.next = pHead;
    var cur = Head.next;
    var pre = Head;
    
    while(cur!=null){
        if(cur.next != null && cur.val == cur.next.val){
            while (cur.next != null && cur.val == cur.next.val) {
                cur = cur.next;
            }
            pre.next = cur.next;
            cur = cur.next;
        }else{
            cur = cur.next;
            pre = pre.next;
        }
    }
    return Head.next;
}