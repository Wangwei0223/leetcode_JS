/**
 * 502 IPO
 */
/*
class Solution {
    
    public class Node{
        public int p;
        public int c;
        
        public Node(int p, int c){
            this.p = p;
            this.c = c;
        }
    }
    
    public class MinCostComparator implements Comparator<Node>{
        @Override
        public int compare(Node o1, Node o2){
            return o1.c - o2.c;
        }
    }
    
    public class MaxProfitComparator implements Comparator<Node>{
        @Override
        public int compare(Node o1, Node o2){
            return o2.p - o1.p;
        }
    }
    
    public int findMaximizedCapital(int k, int W, int[] Profits, int[] Capital) {
        Node[] nodes = new Node[Profits.length];
        for(int i = 0; i < Profits.length; i++){
            nodes[i] = new Node(Profits[i], Capital[i]);
        }
        
        //PriorityQueue<Node> minCostQ = new PriorityQueue<>(new MinCostComparator());
        PriorityQueue<Node> minCostQ = new PriorityQueue<>(new Comparator<Node>() {
            @Override
            public int compare(Node o1, Node o2){
            return o1.c - o2.c;
            }
        });
        PriorityQueue<Node> maxProfitQ = new PriorityQueue<>(new MaxProfitComparator());
        
        for(int i = 0; i < nodes.length; i++){
            minCostQ.add(nodes[i]);
        }
        
        for(int i = 0; i < k; i++){
            while(!minCostQ.isEmpty() && minCostQ.peek().c <= W){
                maxProfitQ.add(minCostQ.poll());
            }
            if(maxProfitQ.size() == 0) return W;
            
            W += maxProfitQ.poll().p;
        }
              
        return W;
    }
        
}
*/

/**
 * 教室问题 一些项目要占用一个会议室宣讲, 会议室不能同时容纳两个项目的宣讲. 给你每一个项目开始时间和结束时间, 你来安排宣讲日程, 要求会议室宣讲场次最多
 */

/**
 * 按时间结束的早的来排
 */

class Project {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

let arr = [new Project(0, 3), new Project(0, 2)];

let f = function (name) {
    return function (o1, o2) {
        let v1 = o1[name], v2 = o2[name];
        if (v1 < v2) return -1;
        else if (v1 > v2) return 1;
        return 0;
    }
}

arr.sort(f('end'));
console.log(arr);

/**
 * 汉诺塔3步 1. 1->n-1 挪到help 2.单n挪到 to 3. 1->n-1挪到to
 */
class Hanoi {
    move(n, from, help, to) {
        if (n === 1) console.log("move " + n + "from " + from + "to " + to);
        else {
            this.move(n - 1, from, to, help);
            this.move(1, from, help, to);
            this.move(n - 1, help, from, to);
        }
    }
}

let hanoi = new Hanoi();
hanoi.move(3, '左', '中', '右');


class subSequence {
    getSub(seq, index, res) {
        if (index === seq.length) {
            console.log(res);
            return;
        }
        this.getSub(seq, index + 1, res);
        this.getSub(seq, index + 1, res + seq[index]);
    }
}

let sub = new subSequence();
sub.getSub('abc', 0, '');

/**
 * 母牛每年生一只母牛, 新出生的母牛成长三年后也能每年生一只母牛, 假设不会死, 求N年后, 母牛的数量
 * 
 * 规律 F(n) = F(n - 1) + F(n - 3)
 */

var count = function (n) { 
    let res = [0, 1, 2, 3, 4];

    for(let i = 5; i <= n; i++){
        res.push(res[i - 1] + res[i - 3]);
    }

    return res[n];
}

console.log(count(6));

/**
 * leetcode 78
 * 
 */

/**
 * 
 * 给一个数组arr. 一个aim, 看看能不能加出 aim
 * 
 */