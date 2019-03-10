/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */


var count = function(A, B, val){
    let res = 0;
    for(let i = 0; i < A.length; i++){
        if(A[i] === val) continue;
        if(B[i] === val) res++;
        else{
            return Number.MAX_VALUE;
        }
    }
    return res;    
}

var minDominoRotations = function(A, B) {
	let ans = Math.min(Math.min(count(A, B, A[0]), count(A, B, B[0])), Math.min(count(B, A, A[0]), count(B, A, B[0])));
	
    if(ans === Number.MAX_VALUE) return -1;
    
    return ans;
};