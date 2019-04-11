/**
 * 210. Course Schedule II
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // return bfs(numCourses, prerequisites); // BFS
    let visit = new Array(numCourses).fill(0), graph = new Map(), helper = [];
    for(let i = 0; i < numCourses; i++){
        graph.set(i, []);
    }
    
    for(let i of prerequisites){
        graph.get(i[1]).push(i[0]);
    }
    
    for(let i = 0; i < numCourses; i++){
        if(!dfs(graph, i, visit, helper)) return [];
    }

    return helper.reverse();
};

// DFS
// 加个辅助栈, 别正着想, 反向到头了, 压栈
var dfs = function(graph, idx, visit, helper){
    if(visit[idx] === 1) return true;
    if(visit[idx] === -1) return false;
    visit[idx] = -1;
    
    for(let i of graph.get(idx)){
        if(!dfs(graph, i, visit, helper)) return false;
    }
    
    visit[idx] = 1;
    
    helper.push(idx); // 入栈时间必须是当前点已经递归完了
    
    return true;
}