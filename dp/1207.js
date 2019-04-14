/**
 * 1027. Longest Arithmetic Sequence
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function(A) {
    let max = 2;
    let dp = new Map();
    for(let i = 0; i < A.length; i++){
        for(let j = i + 1; j < A.length; j++){
            let a = A[i], b = A[j];
            if(!dp.has(b - a)){
                dp.set(b - a, new Map());
            }
            let diff = dp.get(b - a);
            if(!diff.has(i)){
                diff.set(i, 0);
            }
            
            if(!diff.has(j)){
                diff.set(j, 0);
            }
            
            let curMax = Math.max(diff.get(j), diff.get(i) + 1);
            diff.set(j, curMax);
            max = Math.max(max, curMax + 1);
        }
    }
    
    return max;
};