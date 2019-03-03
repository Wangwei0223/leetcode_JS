/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */


//快慢指针找List中点
var sortedListToBST = function(head) {
    if(!head) return head;
    
    let mid = findMiddle(head);
    
    let node = new TreeNode(mid.val);
    
    // 只有一个
    if(head === mid) return node;
    
    node.left = sortedListToBST(head);
    node.right = sortedListToBST(mid.next);
    
    return node;
};

var findMiddle = function(head){
    let fast = head, slow = head, prev = null;
    
    while(fast && fast.next){
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    if(prev){
        prev.next = null; // 断开
    }
    
    return slow;
}
