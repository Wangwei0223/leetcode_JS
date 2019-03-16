/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
    let graph = new Map();
    for(let i of times){
        if(!graph.has(i[0])){
            graph.set(i[0], []);
        }
        graph.get(i[0]).push([i[1], i[2]]);
    }
    
    for(let i of graph.keys()){
        graph.get(i).sort(function(a, b){
            return a - b;
        });
    }
    
    let dist = new Map();
    for(let i = 1; i <= N; i++){
        dist.set(i, Number.MAX_VALUE);
    }
    dfs(graph, K, 0, dist);
    let res = 0;
    for(let i of dist.values()){ // 到达所有点的距离
        if(i === Number.MAX_VALUE) return -1;
        res = Math.max(res, i);
    }
    
    return res;
};


var dfs = function(graph, node, distance, dist){
    if(distance >= dist.get(node)) return; // 如果到达当前点的距离已经大于了到达当前点的最小距离, return 完美避免循环递归还不用visit存
    dist.set(node, distance);
    if(graph.has(node)){
        for(let i of graph.get(node)){
            dfs(graph, i[0], distance + i[1], dist);
        }
    }
}
