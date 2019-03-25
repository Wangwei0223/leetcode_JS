/**
 * 1022. Smallest Integer Divisible by K
 * @param {number} K
 * @return {number}
 */
var smallestRepunitDivByK = function(K) {
    let sum = 0;
    for(let n = 1; n <= K; n++){
        sum = (sum * 10 + 1) % K;
        if(sum === 0){
            return n;
        }
    }    
    
    return -1;
};