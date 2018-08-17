/**
 * 96. 不同的二叉搜索树
 * @param {number} n
 * @return {number}
 */

/*
 d[3] = d[2]*d[0] + d[1]*d[1] + d[0]*d[2]
*/
var numTrees = function(n) {
    var result = [1, 1];
    
    for (var i = 2; i <= n; i++) {
        result[i] = 0;
        for (var j = 0; j < i; j++) {
            result[i] += result[j] * result[i - 1 - j];
        }
        
    }
    return result[n];
};