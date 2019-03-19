/**
 * 494. Target Sum
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */

var findTargetSumWays = function(nums, S) {
    if(nums.length === 0) return 0;
    let res = [0];
    dfs(nums, 0, 0, S, res);
    return res[0];
};


var dfs = function(nums, idx, temp, S, res){
    if(idx > nums.length) return;
    if(idx === nums.length && temp === S){
        res[0] += 1;
        return;
    }
    dfs(nums, idx + 1, temp + nums[idx], S, res);
    dfs(nums, idx + 1, temp - nums[idx], S, res);
}