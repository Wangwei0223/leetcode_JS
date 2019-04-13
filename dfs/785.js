/**
 * 785. Is Graph Bipartite?
 * @param {number[][]} graph
 * @return {boolean}
 */

// DFS 染色法
var isBipartite = function(graph){
    let color = new Array(graph.length).fill(0);
    for(let i = 0; i < graph.length; i++){
        if(color[i] === 0 && !dfs(graph, color, i, 1)){
            return false;
        }
    }
    return true;
}

var dfs = function(graph, color, idx, c){
    color[idx] = c;
    for(let i of graph[idx]){
        if(color[i] !== 0 && color[i] === color[idx]) return false;
        if(color[i] === 0 && !dfs(graph, color, i , -c)) return false;
    }
    return true;
}