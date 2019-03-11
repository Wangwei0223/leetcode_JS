/**
 * 1005. Maximize Sum Of Array After K Negations
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
    for(let i = 0; i < K; i++){
        A.sort(function(a, b){
            return a - b;
        });
        A[0] = -A[0];
    }
    
    let sum = 0;
    for(let i = 0; i < A.length; i++){
        sum+=A[i];
    }
    
    return sum;
};