/**
 * 785. Is Graph Bipartite?
 * @param {number[][]} graph
 * @return {boolean}
 */

// union find
// graph的第i项是i相邻的点, 拿出第一个与i比, parent一样返回false, 不一样继续, 把之后相邻的点parent都改成第一个相邻点

var isBipartite = function(graph) {
    let parent = new Array(graph.length).fill(-1);
    for(let i = 0; i < graph.length; i++){
        if(graph[i].length === 0) continue;
        let xp = find(parent, i), yp = find(parent, graph[i][0]);
        if(xp === yp) return false;
        for(let j = 1; j < graph[i].length; j++){
            let jp = find(parent, graph[i][j]);
            if(jp === xp) return false;
            union(parent, graph[i][0], graph[i][j]);
            // if(yp !== jp) parent[yp] = jp; // 一定要判断不等于不然find就无限循环, 永远到不了-1, 不然换find和parent写法, parent[i] = i
        }
    }
    
    return true;
};


var find = function(parent, x){
    if(parent[x] === -1) return x;
    return find(parent, parent[x]);
}

var union = function(parent, x, y){
    let xp = find(parent, x);
    let yp = find(parent, y);
    if(xp !== yp){
        parent[yp] = xp;
    }
}