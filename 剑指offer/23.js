/**
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
 * @param {*} sequence 
 */
function VerifySquenceOfBST(sequence) {
    // write code here
    if (sequence.length === 0) return false;
    return helper(sequence);
}

function helper(sequence) {
    if (sequence.length <= 1) return true;

    var n = sequence.length - 1;
    var root = sequence[n];
    var left;
    for (let i = n - 1; i >= 0; i--) {
        if (sequence[i] < root) {
            left = i;
            break;
        }
    }

    for (let j = 0; j <= left; j++) {
        if (sequence[j] > root) return false;
    }

    return helper(sequence.slice(0, left + 1)) && helper(sequence.slice(left + 1, n));
}