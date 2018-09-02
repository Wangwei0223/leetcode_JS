/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。
 * 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
 * @param {*} rotateArray 
 */
function minNumberInRotateArray(rotateArray)
{
    // write code here
    var start = rotateArray[0];
    var end = rotateArray[rotateArray.length - 1];
    if(start >= end){ // 说明旋转过 肯定从后向前
        for(let j = rotateArray.length - 1; j > 0; j--){
            if(rotateArray[j] < rotateArray[j - 1]) return rotateArray[j];
        }
        return end;
    }else{
        return start;
    }
}