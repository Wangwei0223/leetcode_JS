/**
 * @param {number[][]} graph
 * @param {number[]} initial
 * @return {number}
 */

// DFS 染色法, 相互的连通的点标上同一个颜色
var minMalwareSpread = function(graph, initial) {
    if(graph.length === 0) return 0;
    let color = 0, colors = new Array(graph.length).fill(-1); //存每个node对应的color
    
    // 相连通的点染一个颜色
    for(let i = 0; i < graph.length; i++){
        if(colors[i] === -1){
            dfs(graph, i, colors, color++);
        }
    }
    
    // 数每一种颜色的个数
    let colorCount = new Array(color).fill(0);
    for(let i of colors){
        colorCount[i] += 1;
    }
    
    // 在initial中找到unique color
    let unique = new Array(color).fill(0);
    for(let i of initial){
        unique[colors[i]] += 1;
    }

    let ans = Number.MAX_VALUE;
    for(let i of initial){
        if(unique[colors[i]] === 1){
            if(ans === Number.MAX_VALUE){
                ans = i;
            }else if(colorCount[colors[ans]] < colorCount[colors[i]]){
                ans = i;
            }else if(colorCount[colors[ans]] === colorCount[colors[i]] && ans > i){
                ans = i;
            }
        }
    }
    
    if(ans === Number.MAX_VALUE){
        for(let i = 0; i < initial.length; i++) ans = Math.min(ans, initial[i]);
    }
    
    return ans;
};

var dfs = function(graph, node, colors, color){
    colors[node] = color;
    for(let i = 0; i < graph[0].length; i++){
        if(graph[node][i] === 1 && colors[i] === -1){
            dfs(graph, i, colors, color);            
        }
    }
}

// Union Find
var minMalwareSpread_ = function(graph, initial) {
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