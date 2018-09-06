/**
 * 和为S的字符串
 * @param {*} array 
 * @param {*} sum 
 */
function FindNumbersWithSum(array, sum)
{
    // write code here
    if(array.length < 2) return [];
    var left = 0;
    var right = array.length - 1;
    var res = [];
    while(left < right){
        if(array[left] + array[right] < sum){
            left++;
        }
        else if(array[left] + array[right] > sum){ // else if
            right--;
        }
        else{
            res.push(array[left], array[right]);
            break;
        }
    }
    return res;
}