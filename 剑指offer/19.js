/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵： 
 * 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
 * @param {*} matrix 
 */
function printMatrix(matrix)
{
    // write code here
    if(!matrix) return;
    var res = [];;
    res = res.concat(matrix.shift());  // 直接res = [firstrow] 会出现 [[]]
    while(matrix.length > 0){
        matrix = reverse(matrix);
        res = res.concat(matrix.shift());
    }
    return res;
}
        
function reverse(matrix){
    if(matrix[0].length === undefined)return matrix;
    var col = matrix[0].length;
    var row = matrix.length;
    var newMatrix = [];
    for(let j = col - 1; j >= 0; j--){
        var temp = [];
        for(let i = 0; i < row; i++){
            temp.push(matrix[i][j]);
        }
        newMatrix.push(temp);
    }
    return newMatrix;
}

console.log(printMatrix([[1,2],[3,4]]));

/**
 * 这里面的关键是：if([])与if([] == true)是不等价的if([])的含义：
 * []是否为“真值”if([] == true)的含义：[]与true是否相等。（如果使用===，表示绝对相等，需要类型相同并且值相同；
 * 如果使用==，则在类型不同的情况下会进行类型转换，然后再比较）
 * js里的“真值”很好判断，因为“假值”总共只有6个：false，undefined，null，0，""（空字符串），NaN除此之外的所有值，都是“真值”，
 * 即在逻辑判断中可以当true来使用但是这些“真值”并不一定等于true，因为比较的时候发生了类型转换，此处比较会将操作数转换为数值类型。
    作者：sagittarius-rev
    链接：https://www.zhihu.com/question/47555543/answer/106592696
    来源：知乎
    著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */