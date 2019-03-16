/**
 * 207. Course Schedule
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// 有向无环图检测
//DFS做法
// visit 有三种状态 1 访问, -1有冲突, 0 未访问
var canFinish = function(numCourses, prerequisites){
    let visit = [];
    for(let i = 0; i < numCourses; i++){
        visit.push(0);
    }
    
    let graph = new Map();
    for(let i = 0; i < numCourses; i++){
        graph.set(i, []);
    }
    
    for(let i of prerequisites){
        graph.get(i[0]).push(i[1]);
    }
    
    for(let i = 0; i < numCourses; i++){
        if(!dfs(graph, i, visit)) return false;
    }
    
    return true;
}


var dfs = function(graph, i, visit){
    if(visit[i] === -1){
        return false;
    }
    visit[i] = -1; //这里很重要, 我一开始就是没想到这里, 当前递归不冲突
    
    for(let j of graph.get(i)){
        if(!dfs(graph, j, visit)) return false;
    }
    
    visit[i] = 1; //当前递归不冲突, 就是以当前节点DFS, 不回到当前节点, 递归完了要置回来
    
    return true;
}