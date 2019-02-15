/** 
 * 78. Subset
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];
    getSeq(nums, 0, [], result);
    return result;
};

var getSeq = function(num, index, res, result){
    if(index === num.length) {
        result.push(res.slice());
        return;
    }
    res.push(num[index]);
    getSeq(num, index + 1, res, result);
    res.pop();
    getSeq(num, index + 1, res, result);
}