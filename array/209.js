/**
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
        else if(cur < s){
            right++;
            cur += nums[right];
        }
        else{
            cur -= nums[left];
            left++;
        }
        
    }
    
    return res > nums.length ? 0 : res;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));