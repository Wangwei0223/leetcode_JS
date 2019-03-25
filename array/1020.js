/**
 * 1020. Partition Array Into Three Parts With Equal Sum
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    let sum = 0;

    let arr = A;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    let target = sum / 3;
    if(parseInt(sum / 3)!== target) return false;
    
    
    let cur = 0, res = 0;
    while(arr.length > 0){
        cur += arr.shift();
        if(cur === target){
            res += 1;
            cur = 0;
        }
    }
    
    return res === 3;
};