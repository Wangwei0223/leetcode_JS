/**
 * 1013. Pairs of Songs With Total Durations Divisible by 60
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let hashmap = new Map(), res = 0;
    for(let i of time){
        let cur = i % 60;
        let target = cur === 0 ? 0 : 60 - cur;
        res += hashmap.has(target) ? hashmap.get(target) : 0;
        if(!hashmap.has(cur)) hashmap.set(cur, 0);
        hashmap.set(cur, hashmap.get(cur) + 1);
    }
    return res;
};