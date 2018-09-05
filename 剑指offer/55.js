/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
/**
 * 链表判环找入口
 * @param {*} pHead 
 */
function EntryNodeOfLoop(pHead)
{
    // write code here
    if(!pHead && !pHead.next) return null;
    var f = pHead;
    var s = pHead;
    while(f && f.next){
        f = f.next.next;
        s = s.next;
        if(f === s){
            f = pHead;
            while(f !== s){
                f = f.next;
                s = s.next;
            }
            return f;
        }
    }
    return null;
}