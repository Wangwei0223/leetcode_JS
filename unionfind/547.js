/**
 * 547. Friend Circles
 * @param {number[][]} M
 * @return {number}
 */

//Union Find
var findCircleNum = function(M) {
    let parent = [], res = 0;
    
    for(let i = 0; i < M.length; i++){
        parent.push(-1);
    }
    
    for(let i = 0; i < M.length; i++){
        for(let j = i + 1; j < M[0].length; j++){
            if(M[i][j] === 1){
                union(parent, i, j);
            }
        }
    }
    
    
    for(let i of parent){
        if(i === -1) res++;
    }
    
    return res;
};

var find = function(parent, i){
    if(parent[i] === -1) return i;
    return find(parent, parent[i]);
}

var union = function(parent, x, y){
    let xp = find(parent, x);
    let yp = find(parent, y);
    if(xp !== yp){
        parent[yp] = xp;
    }
}
