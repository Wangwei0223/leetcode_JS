/**
 * 单调栈 重要
 */

/**
 * 85. Maximal Rectangle
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if(matrix.length === 0) return 0;
    let height = [];
    let maxArea = 0, curArea;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(!height[j] || matrix[i][j] === '0'){
                height[j] = 0;
            }
            
            if(matrix[i][j] === '1'){
                height[j] += 1;
            }   
        }
        curArea  = getMax(height);
        maxArea = Math.max(maxArea, curArea);
    }
    
    return maxArea;
};


var getMax = function(height){
    let stack = []; // 单调栈从小到大, 找左右第一个小于自己的数
    let maxArea = 0;
    for(let i = 0; i < height.length; i++){
        while(stack.length > 0 && height[stack[stack.length - 1]] >= height[i]){
            let j = stack.pop(); // 弹出当前数
            let k = stack.length === 0 ? -1 : stack[stack.length - 1]; //左边界
            let curArea = (i - k - 1)*height[j];
            maxArea = Math.max(curArea, maxArea);

            console.log(height[j]+ " 的左边界: " + k + " 右边界: " + i);
        }
        stack.push(i);

        console.log(stack);
    }
    
    while(stack.length > 0){
        let j = stack.pop();
        let k = stack.length === 0 ? -1 : stack[stack.length - 1];
        let curArea = (height.length - k - 1)*height[j];
        maxArea = Math.max(curArea, maxArea);
        console.log(height[j]+ " 的左边界: " + k + " 右边界: " + height.length);
    }
    
    console.log(maxArea);
    return maxArea;
}

/**
 * morris 遍历
 */
