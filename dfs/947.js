// DFS
// 947. Most Stones Removed with Same Row or Column
var removeStones = function(stones){
    let visitR = [], visitC = [], rows = new Map(), cols = new Map();
    let res = 0;
    
    for(let i of stones){
        if(!rows.has(i[0])){
            rows.set(i[0], []);
        }
        if(!cols.has(i[1])){
            cols.set(i[1], []);
        }
        rows.get(i[0]).push(i[1]);
        cols.get(i[1]).push(i[0]);
    }
    
    for(let i of stones){
        if(!visitR[i[0]]){
            res++;
            dfsR(i[0], visitR, visitC, rows, cols);
            dfsC(i[1], visitR, visitC, rows, cols);
        }
    }
    
    return stones.length - res;
}

var dfsR = function(r, visitR, visitC, rows, cols){
    visitR[r] = true;
    for(let i of rows.get(r)){
        if(!visitC[i]){
            dfsC(i, visitR, visitC, rows, cols);
        }
    }
}


var dfsC = function(c, visitR, visitC, rows, cols){
    visitC[c] = true;
    for(let i of cols.get(c)){
        if(!visitR[i]){
            dfsR(i, visitR, visitC, rows, cols);
        }
    }
}