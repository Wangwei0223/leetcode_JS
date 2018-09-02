/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
/**
 * 输入一个链表，输出该链表中倒数第k个结点。
 * @param {*} head 
 * @param {*} k 
 */
function FindKthToTail(head, k)
{
    // write code here
    if(k <= 0 || head === null) return null;
    var p = head, q = head;
    for(let i = 0; i < k - 1; i++){
        q = q.next;
        if(!q) return null;
    }
    
    while(q.next){
        q = q.next;
        p = p.next;
    }
    return p;
}