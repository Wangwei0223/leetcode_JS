/** 
 * 996. Number of Squareful Arrays
 * @param {number[]} A
 * @return {number}
 */
var numSquarefulPerms = function(A) {
    let countMap = new Map(), connectionMap = new Map();
    
    for(let i of A){
        if(!countMap.has(i)){
            countMap.set(i, 1);
            connectionMap.set(i, new Set());
        }else{
            countMap.set(i, countMap.get(i) + 1);
        }
    }
    
    for(let k of countMap.keys()){
        for(let j of countMap.keys()){
            let c = Math.sqrt(k + j);
            if(c === Math.floor(c)){
                connectionMap.get(k).add(j);
                connectionMap.get(j).add(k);
            }
        }
    }
    
    let res = 0;
    
    var permuation = function(left, cur){
        countMap.set(cur, countMap.get(cur) - 1);
        if(left === 0){
            res++;
        }else{
            for(let i of connectionMap.get(cur)){
                if(countMap.get(i) > 0){
                    permuation(left - 1, i);
                }    
            }
        }
        
        countMap.set(cur, countMap.get(cur) + 1);
    }
    
    
    for(let i of countMap.keys()){
        permuation(A.length - 1, i);
    }
    
    
    return res;
    
};