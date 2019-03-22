/**
 * 924. Minimize Malware Spread
 * @param {number[][]} graph
 * @param {number[]} initial
 * @return {number}
 */

// Union Find
var minMalwareSpread = function(graph, initial) {
    let parent = new Array(graph.length).fill(-1), size = new Array(graph.length).fill(1);
    for(let i = 0; i < graph.length; i++){
        for(let j = i + 1; j < graph[0].length; j++){
            if(graph[i][j] === 1){
                union(parent, size, i, j);
            }
        }
    }
    
    let unique = new Array(graph.length).fill(0); //initial中, 记录initial的parent的个数
    for(let i of initial){
        unique[find(parent, i)] += 1;
    }
    
    //取initial中单独自己属于一个连通图的点
    let ans = Number.MAX_VALUE, ansSize = -1;
    for(let i of initial){
        let node = find(parent, i);
        if(unique[node] === 1){
            let curSize = size[node];
            if(ans === Number.MAX_VALUE){
                ans = i;
                ansSize = curSize;
            }else if(ansSize < curSize){
                ans = i;
                ansSize = curSize;
            }else if(ansSize === curSize && ans > i){
                ans = i;
                ansSize = curSize;
            }
        }
    }
    
    if(ans === Number.MAX_VALUE){
        for(let i of initial){
            ans = Math.min(ans, i);
        }
    }
    
    return ans;
}