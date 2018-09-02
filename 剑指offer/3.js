/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
/**
 * 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
 * @param {*} head 
 */
function printListFromTailToHead(head)
{
    // write code here
    var stack_ = [];
    while(head){
        stack_.unshift(head.val);
        head = head.next;
    }
    return stack_;
}