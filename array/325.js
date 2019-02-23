/**
 * 325. Maximum Size Subarray Sum Equals k
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    if(nums.length === 0) return 0;
    let hashmap = new Map(), sum = 0, maxlen = 0;
    hashmap.set(0, -1);
    for(let i = 0; i < nums.length; i++){
        if(hashmap.has(sum + nums[i] - k)){
            maxlen = Math.max(i - (hashmap.get(sum + nums[i] - k) + 1) + 1, maxlen);
        }
        
        if(!hashmap.has(sum + nums[i])){
            hashmap.set(sum + nums[i], i); // 某累加和最早出现的位置
        }
        
        sum += nums[i];
    }
    
    return maxlen;
};