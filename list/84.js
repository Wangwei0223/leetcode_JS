/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 *  输入: 1->1->1->2->3
    输出: 2->3

    输入: 1->2->3->3->4->4->5
    输出: 1->2->5

    输入: 1->1->2->2->3
    输出: 3

    输入: 1->2->2
    输出: 1

    输入: 1->2->3->4
    输出: 1->2->3->4
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head) return null;

    var cur = head, p = head, t = false, flag = false, pre = cur; // 引用标志位和pre节点, pre节点主要是为了处理最后一个
    if (head.next && head.val === head.next.val) t = true; // 第一个如果重复先记录, 因为无法  null->
    
    while (cur && cur.next) {
        if (cur.val !== cur.next.val) {
            if (flag) {
                p.next = cur;
                p = p.next;
            }
            flag = true;
        } else {
            flag = false;
        }
        pre = cur;
        cur = cur.next;
    }
    p.next = pre.val === cur.val ? null : cur; // 处理最后一个
    return t ? head.next : head; // 处理第一个
};