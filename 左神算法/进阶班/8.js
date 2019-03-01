/** 
 * 209. Minimum Size Subarray Sum
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if(nums.length === 0) return 0;
    let left = 0, right = 0, cur = nums[left], res = Number.MAX_VALUE;
    while(right < nums.length || left > right){
        if(cur >= s){
            res = Math.min(res, right - left + 1);
            cur -= nums[left];
            left++;
        }
        else{
            right++;
            cur += nums[right];
        }
    }
    
    return res > nums.length ? 0 : res;
};


/**
 * 字符串匹配问题
 */