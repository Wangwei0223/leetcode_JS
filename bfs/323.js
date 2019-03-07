var countComponents = function(n, edge){
    let adj = new Map(), visit = [], res = 0, queue = [];
    for(let i = 0; i < n; i++){
        adj.set(i, []);
    }
    
    for(let i of edge){
        adj.get(i[0]).push(i[1]);
        adj.get(i[1]).push(i[0]);
    }
    
    for(let i = 0; i < n; i++){
        if(!visit[i]){
            visit[i] = true;
            queue.push(i);
            res++;
        }
        while(queue.length > 0){
            let cur = queue.shift();
            for(let j of adj.get(cur)){
                if(!visit[j]){
                    visit[j] = true;
                    queue.push(j);
                }
            }
        }
    }
    
    return res;
}