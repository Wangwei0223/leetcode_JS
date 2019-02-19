/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/*
双端队列, 必须按照规则 从大到小排, 入队规则: 比前一个小, 入队, 比前一个大, 一直把前面的出队, 等于也出队
出队规则: 看坐标过不过期, 过期弹出. 要看坐标! 不一定第一个就是要出队的, 有可能第一个是刚刚入队的(把前面的都弹干净了)
最大值: 队列第一个
*/

var maxSlidingWindow = function(nums, k) {
    if(nums.length === 0 || k <= 0) return [];
    let expire = 0, deque = [], res = [];
    for(let i = 0; i < nums.length; i++){
        if(deque.length > 0 && nums[deque[deque.length - 1]] > nums[i]){
            deque.push(i);
        }else{
            while(deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]){
                deque.pop();
            }
            deque.push(i);
        }
        
        if(deque[0] === expire - k){
            deque.shift();
        }
        
        expire++;
        
        if(expire - k >= 0){
            res.push(nums[deque[0]]);
        }
    
    }
    
    return res;
};