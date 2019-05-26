/**
 * 1051. Height Checker
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let copy = heights.slice(), res = 0;
    copy.sort(function(a, b){
        return a - b;
    });
    
    for(let i = 0; i < heights.length; i++){
        if(copy[i] !== heights[i]){
            res++;
        }
    }
    
    return res;
};