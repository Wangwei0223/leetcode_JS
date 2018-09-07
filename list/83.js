/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head) return null;
    
    var cur = head;
    while(cur && cur.next){
        if(cur.next.val === cur.val){
            cur.next.val = cur.val;
            cur.next = cur.next.next;
        }else{
            cur = cur.next; // 写在else里是因为 [1, 1, 1]的情况 相等的情况cur不用变, 接着比
        }
        
    }
    return head;
};