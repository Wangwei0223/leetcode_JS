/**
 * 207. Course Schedule
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// 有向无环图检测

// BFS做法
// 新建一个入度数组, 记录每个点的入度, 从入度为0的点开始BFS, 每到达一个新的点, 就把这个点的入度-1, 若入度变为0, 放入队尾等待下一次BFS, 队列为空若还有点入度不为0, 则存在环
var canFinish = function(numCourses, prerequisites) {
    let inD = []; //记录每个点入度的数组
    let graph = new Map();
    for(let i = 0; i < numCourses; i++){
        inD.push(0);
        graph.set(i, []);
    }
    
    for(let i of prerequisites){
        inD[i[1]] += 1;
        graph.get(i[0]).push(i[1]);
    }
    let queue = []; //从入度为0的点开始BFS
    for(let i = 0; i < inD.length; i++){
        if(inD[i] === 0){
            queue.push(i);
        } 
    }
    
    while(queue.length > 0){
        let cur = queue.shift();
        for(let i of graph.get(cur)){
            inD[i] -= 1;
            if(inD[i] === 0) queue.push(i);
        }
    }
    
    for(let i of inD){
        if(i !== 0) return false;
    }
    
    return true;
};