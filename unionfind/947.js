/**
 * 947. Most Stones Removed with Same Row or Column
 * @param {number[][]} stones
 * @return {number}
 */

// union find 石头总数减去连通图个数
var removeStones = function(stones) {
    if(stones.length === 0 || stones.length === 1){
        return 0;
    }
    let parent = [], s = new Set(); // 用一个set缩减递归次数
    for(let i = 0; i < stones.length; i++){
        parent[i] = -1;
    }
    
    for(let j = 0; j < stones.length; j++){
        for(let k = 0; k < stones.length; k++){
            if(k === j) continue;
            if(stones[j][0] === stones[k][0] || stones[j][1] === stones[k][1]){
                let cur = j < k ? [j, k] : [k, j];
                if(s.has(cur.toString())) continue;
                union(parent, k, j);
                s.add(cur.toString());
            }
        }
    }
    
    let res = 0;
    for(let i of parent){
        if(i === -1) res++;
    }
    
    return stones.length - res;
};


var find = function(parent, x){
    if(parent[x] === -1){
        return x;
    }
    
    return find(parent, parent[x]);
}


var union = function(parent, x, y){
    let xp = find(parent, x);
    let yp = find(parent, y);
    if(xp !== yp){
        parent[xp] = yp;
    }
}