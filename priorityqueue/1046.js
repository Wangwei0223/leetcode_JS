/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while(stones.length > 1){
        stones.sort(function(a, b){
            return a - b;
        });
        let max_1 = stones.pop();
        let max_2 = stones.pop();
        if(max_1 === max_2) continue;
        let cur = max_1 > max_2 ? max_1 - max_2 : max_2 - max_1;
        stones.push(cur);
    }
    
    return stones.length > 0 ? stones[0] : 0;
};