/**
 * @param {number} N
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function(N, lamps, queries) {
    if(N === 0 || lamps.length === 0) return [];
    let lamp_set = new Set();
    for(let i of lamps){
        lamp_set.add(i.toString());
    }
    
    let hori = new Map();
    let vert = new Map();
    let l_oblic = new Map();
    let r_oblic = new Map();
    
    for(let item of lamps){
        if(!hori.has(item[0])){
            hori.set(item[0], 1);
        }else{
            hori.set(item[0], hori.get(item[0]) + 1);
        }
        
        if(!vert.has(item[1])){
            vert.set(item[1], 1);
        }else{
            vert.set(item[1], hori.get(item[1]) + 1);
        }
        
        if(!l_oblic.has(item[0] + item[1])){
            l_oblic.set(item[0] + item[1], 1);
        }else{
            l_oblic.set(item[0] + item[1], l_oblic.get(item[0] + item[1]) + 1);
        }
        
        if(!r_oblic.has(item[1] - item[0])){
            r_oblic.set(item[1] - item[0], 1);
        }else{
            r_oblic.set(item[1] - item[0], r_oblic.get(item[1] - item[0]) + 1);
        }
    }
    
    let res = [];
    
    for(let item of queries){
        if(hori.has(item[0]) || vert.has(item[1]) || l_oblic.has(item[0] + item[1]) || r_oblic.has(item[1] - item[0])){
            res.push(1);
        }else{
            res.push(0);
        }
        
        for(let dx of [-1, 0, 1]){
            for(let dy of [-1, 0, 1]){
                let xp = item[0] + dx, yp = item[1] + dy;
                if(lamp_set.has([xp, yp].toString())){
                    
                    lamp_set.delete([xp, yp].toString());
                    
                    hori.set(xp, hori.get(xp) - 1);
                    if(hori.get(xp) === 0) hori.delete(xp);
                    
                    vert.set(yp, vert.get(yp) - 1);
                    if(vert.get(yp) === 0) vert.delete(yp);
                    
                    l_oblic.set(xp + yp, l_oblic.get(xp + yp) - 1);
                    if(l_oblic.get(xp + yp) === 0) l_oblic.delete(xp + yp);
                    
                    r_oblic.set(yp - xp, r_oblic.get(yp - xp) - 1);
                    if(r_oblic.get(yp - xp) === 0) r_oblic.delete(yp - xp); 
                }
            }
        }
        
    }
    
    return res;
};