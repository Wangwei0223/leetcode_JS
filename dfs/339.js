var depthSum = function (nestedList) {
    if (nestedList.length === 0) return 0;
    let res = { val: 0 };
    dfs(nestedList, 1, res);

    return res.val;
};


var dfs = function (list, depth, res) {
    let cur = 0;
    for (let i of list) {
        if (Array.isArray(i)) {
            dfs(i, depth + 1, res);
        } else {
            cur += i;
        }
    }
    res.val += cur * depth;
}

console.log(depthSum([[1, 1], 2, [1, 1]]))