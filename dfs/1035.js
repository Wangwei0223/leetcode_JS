/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function (A, B) {
    let res = [];
    dfs(A, B, 0, res);
    res.sort(function (a, b) {
        return b - a;
    });

    return res[0];
};

// 每一个点都可以选择 连, 或者不连
var dfs = function (A, B, nums, res) {
    if (A.length === 0 || B.length === 0) {
        res.push(nums);
        return;
    }
    let cur = A[0];
    let idxB = B.indexOf(cur); // 找最近的连
    // 连 cur
    let curB = B.slice();
    if (idxB === -1) {
        A.shift();
        dfs(A, B, nums, res);
        return;
    } else {
        A.shift();
        console.log('当前连:', cur, '和 ', B[idxB], nums + 1);
        B = B.slice(idxB + 1);
        dfs(A, B, nums + 1, res);
    }

    // 或者不连cur;
    dfs(A, curB, nums, res);
}
let A = [4, 1, 2, 5, 1, 5, 3, 4, 1, 5]
let B = [3, 1, 1, 3, 2, 5, 2, 4, 1, 3, 2, 2, 5, 5, 3, 5, 5, 1, 2, 1]
console.log(maxUncrossedLines(A, B));
