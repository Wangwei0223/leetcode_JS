/**
 * 
 * @param {*在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。} target 
 * @param {*} array 
 */
function Find(target, array)
{
    // write code here
    var m = array.length - 1;
    var n = 0;
    if(m === -1) return;

    while(m >=0 && n < array[0].length){
        var cur = array[m][n];
        if(target < cur){
            m--;
        }
        else if(target > cur){
            n++;
        }else{
            return true;
        }
    }
    return false;
}

console.log(Find(7, [[1,2,8,9],[2,4,9,12]]))