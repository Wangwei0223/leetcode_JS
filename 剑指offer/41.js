/**
 * 小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。
 * 但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。
 * 没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。
 * 现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? Good Luck!
 * @param {*} sum 
 */

function FindContinuousSequence(sum) {
    // write code here
    //(first + first + i)*(i + 1)*2 = sum;
    let a = 0, res = [], half = sum >> 1;
    while (half--) {
        a++;
        let i = 1;
        while ((i + 1) * (2 * a + i) < 2 * sum) {
            i++;
        }
        if ((i + 1) * (2 * a + i) == 2 * sum) {
            res.push([a, i]);
        }
    }

    for (let i = 0; i < res.length; i++) {
        for (let j = 2; j < res[i][1] + 1; j++) {
            res[i].push(res[i][0] + j);
        }
        res[i][1] = res[i][0] + 1;
    }

    return res.sort(function (a, b) {
        return a[0] - b[0];
    });
}

console.log(FindContinuousSequence(50)); // 11 12 13 14