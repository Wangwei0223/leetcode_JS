/**
 * 785. Is Graph Bipartite?
 * @param {number[][]} graph
 * @return {boolean}
 */
 //  BFS, 相邻染相反色, 已经染了同色说明不行
var isBipartite = function(graph){
    let color = new Array(graph.length).fill(0);
    let queue = [];
    for(let i = 0; i < graph.length; i++){
        if(color[i] !== 0) continue;
        color[i] = 1;
        queue.push(i);
        while(queue.length > 0){
            let cur = queue.shift();
            for(let j of graph[cur]){
                if(color[j] === color[cur]) return false;
                if(color[j] === 0){
                    color[j] = -color[cur];
                    queue.push(j);
                }
            }            
        }

    }
    
    return true;
}