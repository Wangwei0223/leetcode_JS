/**
 * 1020. Number of Enclaves
 * @param {number[][]} A
 * @return {number}
 */

var numEnclaves = function(A) {
    if(A.length === 0) return 0;
    let visit = new Array(A.length).fill([]);
    for(let i = 0; i < A.length; i++){
        visit[i] = new Array(A[0].length).fill(false); // visit 数组的初始化很重要, visit[i][j] = false不行
    }
    
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A[0].length; j++){
            if((i === 0 || j === 0 || i === A.length - 1 || j === A[0].length - 1) && A[i][j] === 1){
                dfs(i, j, visit, A);
            }
        }
    }
    
    let res = 0;
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A[0].length; j++){
            if(visit[i][j] === false && A[i][j] === 1){
                res++;
            }
        }
    }
    
    
    return res;
};

var dfs = function(i, j, visit, A){
    if(visit[i][j] === true) return;
    visit[i][j] = true;
    let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    for(let d of dirs){
        let nr = i + d[0], nc = j + d[1];
        if(nr < 0 || nc < 0 || nr >= A.length || nc >= A[0].length || A[nr][nc] === 0) continue;
        dfs(nr, nc, visit, A);
    }
}