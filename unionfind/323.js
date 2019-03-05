/**
 * 323. Number of Connected Components in an Undirected Graph
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    let parent = [], res = 0;
    for(let i = 0; i < n; i++){
        parent[i] = -1;
    }
    
    for(let i of edges){
        if(find(parent, i[0]) !== find(parent, i[1])){
            union(parent, i[0], i[1]);
        }
    }
    
    for(let i of parent){
        if(i === -1) res++;
    }
    
    return res;
};


var find = function(parent, x){
    if(parent[x] === -1){
        return x;
    }
    
    return find(parent, parent[x]);
}


var union = function(parent, x, y){
    let xp = find(parent, x);
    let yp = find(parent, y);
    if(xp !== yp){
        parent[xp] = yp;
    }
}