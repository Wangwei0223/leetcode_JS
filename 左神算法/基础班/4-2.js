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