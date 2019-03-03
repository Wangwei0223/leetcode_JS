/**
 * 547. Friend Circles
 * @param {number[][]} M
 * @return {number}
 */

//BFS
var findCircleNum = function(M){
    let visit = [], queue = [], cur = null, res = 0;
    for(let i = 0; i < M.length; i++){
        if(!visit[i]){
            queue.push(i);
            while(queue.length > 0){
                cur = queue.shift();
                visit[cur] = true;
                for(let j = 0; j < M.length; j++){
                    if(M[cur][j] === 1 && !visit[j]){
                        queue.push(j);
                    }
                }
            }
            res++;
        }
    }
    return res;
}