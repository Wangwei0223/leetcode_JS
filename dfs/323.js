var countComponents = function(n, edge){
    let adj = new Map(), visit = [], res = 0;
    for(let i = 0; i < n; i++){
        adj.set(i, []);
    }
    
    for(let i of edge){
        adj.get(i[0]).push(i[1]);
        adj.get(i[1]).push(i[0]);
    }
    
    for(let i = 0; i < n; i++){
        if(!visit[i]){
            dfs(adj, i, visit);
            res++;
        }
    }
    
    return res;
}

var dfs = function(adj, idx, visit){
    if(visit[idx]) return;
    visit[idx] = true;
    for(let i of adj.get(idx)){
        if(!visit[i]){
            dfs(adj, i, visit);
        }
    }
}