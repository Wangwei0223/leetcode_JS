/**
 * 连续字数组最大和
 * @param {*} array 
 */
function FindGreatestSumOfSubArray(array)
{
    // write code here
    var res = [array[0]];
    for(let i = 1; i < array.length; i++){
        res[i] = res[i - 1] >= 0 ? res[i - 1] + array[i] : array[i];
    }
    res.sort(function(x, y){
        return y - x;
    });
    return res[0];
}