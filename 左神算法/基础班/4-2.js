/**
 * 之字形打印矩阵
 */

class zigzagMatrix {
    constructor(arr) {
        this.matrix = arr.slice();
        this.tr = 0;
        this.tc = 0;
        this.dr = 0;
        this.dc = 0;
        this.endR = arr.length - 1;
        this.endC = arr[0].length - 1;
        this.up = false;
    }

    printMatrix() {
        while (this.tr <= this.endR) {
            this.printDignose(this.matrix, this.tr, this.tc, this.dr, this.dc, this.up);
            // 注意更新是有先后顺序的, 不然会跳过顶点
            // 先更新tr在tc
            this.tr = this.tc === this.endC ? this.tr + 1 : this.tr;
            this.tc = this.tc === this.endC ? this.tc : this.tc + 1;
            // 先更新dc再更新dr
            this.dc = this.dr === this.endR ? this.dc + 1 : this.dc;
            this.dr = this.dr === this.endR ? this.dr : this.dr + 1;
            this.up = !this.up;
        }
    }

    printDignose(matrix, tr, tc, dr, dc, up) {
        if (up) {
            while (tr <= dr) {
                console.log(matrix[tr++][tc--]);
            }
        } else {
            while (dr >= tr) {
                console.log(matrix[dr--][dc++]);
            }
        }
    }
}

let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
let zigzag = new zigzagMatrix(arr);
zigzag.printMatrix();

/**
 * 搜索二维矩阵 Leetcode 74 210
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) return false;
    let m = matrix.length - 1;
    let n = matrix[0].length - 1;
    let startm = 0, startn = n;
    while (startm <= m && startn >= 0) {
        if (matrix[startm][startn] > target) {
            startn--;
        } else if (matrix[startm][startn] < target) {
            startm++;
        } else {
            return true;
        }
    }

    return false;
};

/**
 * 反转链表 Leetcode 206 
 */
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
var reverseList = function (head) {
    if (head === null || head.next === null) return head;

    let n1 = head, n2 = n1.next;
    n1.next = null;
    let n3 = null;
    while (n2) {
        n3 = n2.next;
        n2.next = n1;
        n1 = n2;
        n2 = n3;
    }

    return n1;
};


/**
 * 回文链表 Leetcode 234
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (head === null || head.next === null) return true;
    let n2 = head;
    let n1 = head;

    while (n1.next && n2.next && n2.next.next) {
        n2 = n2.next.next;
        n1 = n1.next;
    }

    n2 = n1.next; // 右边第一个
    n1.next = null;
    let n3 = null;
    // 反转右边
    while (n2) {
        n3 = n2.next;
        n2.next = n1;
        n1 = n2;
        n2 = n3;
    }

    // 现在最后一个是n1
    n3 = n1; // save last node
    n2 = head; //省一个变量用n2 指回head
    let res = true;
    // 检查
    while (n2 && n1) {
        if (n1.val !== n2.val) {
            res = false;
            break;
        }
        n1 = n1.next;
        n2 = n2.next;
    }

    //恢复
    n1 = n3.next;
    n3.next = null
    while (n1) {
        n2 = n1.next;
        n1.next = n3;
        n3 = n1;
        n1 = n2;
    }

    return res
};

/**
 * 分隔链表 Leetcode 86
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(!head || !head.next) return head;
    
//     let p = new ListNode(-1);
//     let q = new ListNode(-1);
//     let smallhead = p, bighead = q;
//     while(head){
//         if(head.val < x){
//             p.next = head;
//             p = p.next;
//         }else{
//             q.next = head;
//             q = q.next;
//         }
//         head = head.next;
//     }
    
//     p.next = bighead.next;
//     q.next = null;
//     return smallhead.next;
    
    let ss = null; // small start
    let se = null; // small end
    let bs = null; // big start
    let be = null; // big end
    let next = null;
    while(head){
        next = head.next;
        head.next = null; // 不把链表每个节点断开会超内存
        if(head.val < x){
            if(!ss){
                ss = head;
                se = head;
            }else{
                se.next = head;
                se = se.next;
            }
        }else{
             if(!bs){
                bs = head;
                be = head;
            }else{
                be.next = head;
                be = be.next;
            }
        }
        head = next;
    }
    
    if(!ss) return bs;
    else{
        se.next = bs;
        return ss;
    }
};

/**
 * 复制带随机指针的链表 Leetcode 138
 */

 // 使用Hash表
 /**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */

// 准备额外空间hash表, 存新老节点对应关系
var copyRandomList = function(head) {
    if(!head) return head;
    let n1 = head, n2, newhead, hash = new Map();
    
    while(n1){
        let newnode = new RandomListNode(n1.label);
        newnode.random = n1.random; // 这时random连接的还是旧节点, 需要从hash表找对应的新的
        hash.set(n1, newnode);
        if(!newhead){
            n2 = newhead = newnode;
        }else{
            n2.next = newnode;
            n2 = n2.next;
        }
        
        n1 = n1.next;
    }
    
    n2 = newhead;
    while(n2){
        if(n2.random){
            let random = hash.get(n2.random);
            n2.random = random;
        }
        n2 = n2.next;
    }
    return newhead;
};

/**
 * 
 */
/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */

// 空间O(1)
var copyRandomList = function(head) {
    if(!head) return head;
    let n1 = head, newnode, oldnext;
    // 新老节点串联起来
    while(n1){
        newnode = new RandomListNode(n1.label);
        oldnext = n1.next;
        n1.next = newnode;
        newnode.next = oldnext;
        n1 = oldnext;
    }
    n1 = head;
    // 重新串联random
    while(n1){
        newnode = n1.next;
        if(n1.random){
            newnode.random = n1.random.next;   
        }else{
            newnode.random = null;
        }
        n1 = newnode.next;
    }
    // 分离
    n1 = head;
    let newhead = n1.next;
    while(n1){ //只用写n1就行 n1 存在 n1.next一定存在
        newnode = n1.next;
        n1.next = newnode.next;
        n1 = newnode.next;
        if(newnode.next){
           newnode.next = newnode.next.next;  // newnode.next存在newnode.next.next一定存在, 因为newnode.next是老节点
        }else{
            newnode.next = null;
        }
        
    }
    return newhead;
};

/**
 * Leetcode 141 环形链表
 * 1. 快慢指针
 * 2. HashSet
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 快慢指针
var hasCycle = function(head) {
    if(!head || !head.next) return false;
    let n1 = head, n2 = head.next;
    while(n1!==n2){
        n1 = n1.next;
        if(!n1 || !n2 || !n2.next) return false;
        n2 = n2.next.next;
    }
    
    return true;
};

// Hash表
var hasCycle_ = function(head) {
    if(!head) return false;
    let n1 = head;
    let set = new Set();
    while(n1){
        if(set.has(n1)) return true;
        set.add(n1);
        n1 = n1.next;
    }
    return false;
};

/**
 * Leetcode 142 环形链表 返回环入口节点
 * 1. 快慢指针
 * 2. HashSet
 */

 //HashSet
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
// hash表
var detectCycle = function(head) {
    if(!head || !head.next) return null;
    let n1 = head, set = new Set();
    while(n1){
        if(set.has(n1)) return n1;
        set.add(n1);
        n1 = n1.next;
    }
    return null;
};

// 快慢指针
var detectCycle_ = function(head) {
    if(!head || !head.next || !head.next.next) return null;
    let n1 = head.next, n2 = head.next.next;
    while(n1 !== n2){
        n1 = n1.next;
        if(!n1 || !n2 || !n2.next) return null;
        n2 = n2.next.next;
    }
    n2 = head;
    while(n1 !== n2){
        n1 = n1.next;
        n2 = n2.next;
    }
    return n1;
};

/**
 * Leetcode 160 链表相交
 * 思路:
 * 1. 一个有环, 一个没环: 肯定不相交
 * 2. 都无环, end相不相等. end不相等: 一定不相交. 取到两个链表的长度, 长的那个链表先走出长度差, 再长短一起走, 走到相交点
 * 3. 两个都有环: 3个拓扑结构 1. 各自成环 2. 公共环起点 Loop1 === Loop2 3. 不同环起点 Loop1 !== Loop2
 * 4. Loop1 === Loop2 取得交点之后把这个点当成终点, 复用无环链表相交的思路 
 * 5. Loop1 !== Loop2 Loop1.next Loop1继续往下走, Loop1转回自己了都没遇到Loop2说明各自成环, 不相交. Loop1遇到Loop2, 返回Loop1或者Loop2都对
 */