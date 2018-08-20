var maxSubArray = function (nums) {
    var res = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        res[i] = res[i - 1] >= 0 ? res[i - 1] + nums[i] : nums[i];
    }
    res.sort(function (x, y) {
        return y - x;
    });
    return res[0];
};

var res = maxSubArray([1, -2, 2, 1]);

console.log(res);