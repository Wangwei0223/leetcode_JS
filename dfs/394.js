/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    if (s.length === 0) return "";
    let res = dfs(s, 0, 0);

    return res;
};


var dfs = function (s, idx, level) {
    let res = "";
    while (s[idx] !== ']' && idx < s.length) {
        if (!isNaN(s[idx])) {
            let cur = s[idx];
            while(!isNaN(s[idx + 1])){// 注意两位数以上
                cur += s[++idx]
            }
            cur = parseInt(cur);
            let returnStr = dfs(s, idx + 2, level + 1);
            idx = idx + returnStr.length + 3 + level;
            console.log(returnStr, idx, s[idx]);
            while (cur > 0) {
                res += returnStr;
                cur--;
            }
        } else {
            res += s[idx];
            idx++;
        }
    }

    return res;
}

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let str = "";
    let num = 0;
    let ss = "";
    let opened = 0;
    for (let i = 0; i < s.length; i++) {
        let chr = s[i];
        if (opened >= 1) ss += chr;
        if (chr == "[") opened++;
        else if (chr == "]") {
            opened--;
            if (opened == 0) {
                for (let j = 0; j < num; j++) {
                    str += decodeString(ss);
                }
                num = 0;
                ss = "";
            }
        } else {
            if (opened == 0) {
                if (chr >= 0 || chr <= 9) num = `${num}${chr}`;
                else str += chr;
            }
        }
    }
    return str;
};

console.log('a')