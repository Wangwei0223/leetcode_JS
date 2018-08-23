/**120. 三角形最小路径和
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if (triangle.length === 0) return 0;
    for(let i = 1; i < triangle.length; i++){
        for(let j = 0; j < triangle[i].length; j++){
            if(j === 0) triangle[i][j] += triangle[i - 1][j];
            else if(j === triangle[i].length - 1) triangle[i][j] += triangle[i - 1][triangle[i - 1].length - 1];
            else{
                triangle[i][j] +=  Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]);
            }
        }
    }
     triangle[triangle.length - 1].sort(function(a, b){
         return a - b;
     });
     return triangle[triangle.length - 1][0];
};

 console.log(minimumTotal([
    [2],
   [3,4],
  [6,5,7],
 [4,1,8,3]
]));