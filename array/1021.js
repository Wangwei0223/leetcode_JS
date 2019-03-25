/**
 * 1022. Smallest Integer Divisible by K
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
    let res = 0, cur = 0;
    for(let i of A){
        res = Math.max(res, cur + i);
        cur = Math.max(cur, i) - 1;
    }
    
    return res;
};

/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
    let res = 0, cur = A[0];
    for(let i = 1; i < A.length; i++){
        cur = Math.max(cur, A[i - 1] + i - 1);
        res = Math.max(res, cur + A[i] - i);
    }
    
    return res;
};