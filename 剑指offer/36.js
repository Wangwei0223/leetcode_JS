/**
 * 输入两个链表，找出它们的第一个公共结点。
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    var p1 = pHead1;
    var p2 = pHead2;
    while (p1 != p2) 
    {
        p1 = (p1 === null ? pHead2 : p1.next);
        p2 = (p2 === null ? pHead1 : p2.next);
    }
    return p1;
}