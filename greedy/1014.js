/**
 * 1014. Capacity To Ship Packages Within D Days
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
    let max = 0;
    for(let i of weights){
        max = Math.max(max, i);
    }
    
    for(let i = max; i <= weights.length * max; i++){
        let ship = new Array(D).fill(0), index = 0;
        for(let j = 0; j < D; j++){
            while(index < weights.length && ship[j] + weights[index] <= i){
                ship[j] += weights[index]; //ship数组的最后一位存当前累加和
                index++;
            }
        }
        if(index === weights.length) return i;
    }
    
    return 0;
};