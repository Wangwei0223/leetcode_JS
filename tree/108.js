/**
 * 108. 将有序数组转换为二叉搜索树
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return sortedArrayToBSTHelper(0, nums.length);
    
    function sortedArrayToBSTHelper(start, end) {
        if(start >= end) return null;
        
        const middle = start + Math.floor((end - start) / 2);
        const currentNode = new TreeNode(nums[middle]);
        
        const leftNode  = sortedArrayToBSTHelper(start, middle);
        const rightNode = sortedArrayToBSTHelper(middle + 1, end);
        
        currentNode.left  = leftNode;
        currentNode.right = rightNode;
        
        return currentNode;
    }
};
//Method2
var sortedArrayToBST = function(nums) {
    if(nums.length <= 0) return null;
    var root = helper(nums, 0, nums.length - 1);
    return root;
};

var helper = function(arr, start, end){
    if(start > end) return null;
    var mid = parseInt((start + end) / 2);
    var node = new TreeNode(arr[mid]);
    node.left = helper(arr, start, mid - 1);
    node.right = helper(arr, mid + 1, end);
    return node;
} 
