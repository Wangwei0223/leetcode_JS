/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 1019. Next Greater Node In Linked List
 * @param {ListNode} head
 * @return {number[]}
 */
class Node{
    constructor(val, idx){
        this.val = val;
        this.idx = idx;
    }
}

var nextLargerNodes = function(head) {
    let idx = 0;
    let h = new Node(head.val, idx++);
    let stack = [h], ori = [head.val];
    let p = head.next;
    while(p){
        ori.push(p.val);
        while(stack.length > 0 && stack[stack.length - 1].val < p.val){
            let t = stack.pop();
            ori[t.idx] = p.val;
        }
        
        // 入栈
        let cur = new Node(p.val, idx++);
        stack.push(cur);
        p = p.next;
    }
    
    while(stack.length > 0){
        let cur = stack.pop();
        ori[cur.idx] = 0;
    }
    
    return ori;
};