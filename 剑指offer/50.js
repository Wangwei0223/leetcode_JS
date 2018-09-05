/**
 * 数组中重复的数字
 */

function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    var helper = [numbers[0]];
    duplication[0] = -1;
    for(let j = 1; j < numbers.length; j++){
        if(helper.indexOf(numbers[j])!== -1){
            duplication[0] = numbers[j];
            break;
        }
        helper.push(numbers[j]);
    }
    var flag = duplication[0] !== -1 ? true:false;
    return flag;
}