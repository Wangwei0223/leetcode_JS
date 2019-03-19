/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

// 贪婪, 共用n-1位最赚

var crackSafe = function(n, k) {
    let res = '', visit = new Set();
    for(let i = 0; i < n; i++){
        res += '0';
    }
    visit.add(res);
    
    for(let i = 0; i < Math.pow(k, n); i++){
        let pre = res.slice(res.length - n + 1); //取末尾n - 1个
        for(let j = k - 1; j >= 0; j--){
            let cur = pre + j;
            if(!visit.has(cur)){
                visit.add(cur);
                res += j;
                break;
            }
        }
    }
    
    return res;
};