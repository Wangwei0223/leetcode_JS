/**
 * 547. Friend Circles
 * @param {number[][]} M
 * @return {number}
 */

//DFS
var findCircleNum = function(M){
    let visit = [], res = 0;
    for(let i = 0; i < M.length; i++){
        if(!visit[i]) res++;
        dfs(M, visit, i);
    }
    return res;
}

var dfs = function(M, visit, idx){
    if(visit[idx]) return;
    visit[idx] = true;
    for(let j = 0; j < M.length; j++){
        if(M[idx][j] === 1 && !visit[j]){
            dfs(M, visit, j);
        }
    }
    
}