/**
    思路
    建两个优先级队列, 一个是最小花费, 一个是最大利润
    把所有的项目加入最小花费的队列
    循环 k 次
        把最小花费队列中, 按小到大poll, 小于本金的(钱够做的项目)全部加入最大利润的队列
        从最大利润的开始做
        检查最大利润队列没东西了就停止
        W += maxProfitQ.poll.p;
 */

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
