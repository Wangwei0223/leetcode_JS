/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * 364. Nested List Weight Sum II
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
// 我自己想的思路是先正着存depth, 和depth对应的数字, 用两个栈保存
// 找到最大值即可, depth数组中最大的变为1, 其余的变为 1 + 最大深度 - 当前深度. 意思就是最大的和自己差多少, 1 + 差的层数就是当前新层数
var depthSumInverse = function(nestedList) {
    if(nestedList.length === 0) return 0;
    let res = {val : 0}, depth = [], nums = [], maxDepth = [1]; //两个栈分别保存层和层对应的数
    dfs(nestedList, res, depth, nums, 1, maxDepth);
        
    while(depth.length > 0){
        res.val += (1 + maxDepth[0] - depth.pop())*nums.pop();
    }
    
    return res.val;
};

var dfs = function(list, res, depth, nums, curDepth, maxDepth){
    for(let i = 0; i < list.length; i++){
        if(list[i].isInteger()){
            nums.push(list[i].getInteger());
            depth.push(curDepth);
            maxDepth[0] = Math.max(maxDepth[0], curDepth);
        }else{
            dfs(list[i].getList(), res, depth, nums, curDepth + 1, maxDepth);
        }
    }
}