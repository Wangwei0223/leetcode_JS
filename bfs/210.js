/**
 * 210. Course Schedule II
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    return bfs(numCourses, prerequisites);
};


// BFS
var bfs = function(numCourses, prerequisites){
    let inD = []; // 入度数组
    let graph = new Map(), res = [];
    for(let i = 0; i < numCourses; i++){
        inD.push(0);
        graph.set(i, []);
    }
    
    for(let i of prerequisites){
        inD[i[1]]++;
        graph.get(i[0]).push(i[1]);
    }
    
    let queue = [];
    for(let i = 0; i < numCourses; i++){
        if(inD[i] === 0) queue.push(i);
    }

    while(queue.length > 0){
        let cur = queue.shift();
        res.push(cur);
        for(let i of graph.get(cur)){
            inD[i]--;
            if(inD[i] === 0) queue.push(i);   
        }
    }
        
    for(let i of inD){
        if(i !== 0) return [];
    }
    
    return res.reverse();
}