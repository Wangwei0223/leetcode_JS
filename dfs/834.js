/**
 * @param {number} N
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(N, edges) {
    let graph = new Array(N), ans = new Array(N).fill(0), count = new Array(N).fill(1);
    for(let i = 0; i < N; i++){
        graph[i] = new Set();
    }
    
    // 如果直接 let graph = new Array(N).fill(new Set()); 那么数组存的都是同一块内存的Set(), 要写循环挨着个赋值

    for(let item of edges){
        graph[item[0]].add(item[1]);
        graph[item[1]].add(item[0]);
    }

    dfs(graph, 0, -1, count, ans);
    dfs2(graph, 0, -1, count, ans, N);
    
    return ans;
};


var dfs = function(graph, node, parent, count, ans){
    for(let item of graph[node].values()){
        if(item !== parent){
            dfs(graph, item, node, count, ans);
            count[node] += count[item];
            ans[node] += ans[item] + count[item];
        }
    }
}

var dfs2 = function(graph, node, parent, count, ans, N){
    for(let item of graph[node].values()){
        if(item !== parent){
            ans[item] = ans[node] - count[item] + N - count[item];
            dfs2(graph, item, node, count, ans, N);
        }
    }
}