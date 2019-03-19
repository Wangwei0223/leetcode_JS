/**
 * 679. 24 Game
 * @param {number[]} nums
 * @return {boolean}
 */

//每次递归挑两个凑
var judgePoint24 = function(nums) {
    let res = [];
    dfs(nums, 0.001, res);
    return res.indexOf(true) !== -1;
};

var dfs = function(nums, eps, res){
    if(nums.length === 0){
        res.push(false);
        return;   
    }
    if(nums.length === 1){
        res.push(Math.abs(nums[0] - 24) < eps);
        return;
    };
    
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            let a = nums[i], b = nums[j];
            let temp = [nums[i] + nums[j], nums[i] - nums[j], nums[j] - nums[i], nums[i] * nums[j]];
            if(a > eps) temp.push(b / a);
            if(b > eps) temp.push(a / b);
            //j必须小于i这样删i才不会对j产生影响
            nums.splice(i, 1);
            nums.splice(j, 1);
            for(let item of temp){
                nums.push(item);
                dfs(nums, eps, res);
                nums.pop();
            }
            //有先后顺序, j比i小, 先加入j
            nums.splice(j, 0, b);
            nums.splice(i, 0, a);
        }
    }
}