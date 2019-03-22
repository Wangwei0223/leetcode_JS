/**
 * 924. Minimize Malware Spread
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