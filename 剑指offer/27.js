function Permutation(str) {
    // write code here
    if (str.length === 0) return [];
    var res = [];
    dfp(str, [], res, str.length);
    res.sort();
    res = [...new Set(res)];
    return res;
}

function dfp(str, stack, res, n) {
    if (stack.length === n) {
        res.push(stack.join('').slice());
    }
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
        var temp = str;
        var arr = str.split('');
        arr.splice(i, 1);
        var str = arr.join('');
        dfp(str, stack, res, n);
        str = temp;
        stack.pop();
    }
}

console.log(Permutation('cba'));
