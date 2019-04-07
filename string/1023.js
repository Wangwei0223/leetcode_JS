/**
 * 1023. Camelcase Matching
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function(queries, pattern) {
    let res = [];
    for(let i of queries){
        let flag = true;
        let pattern_ = pattern;
        for(let j of i){
            if(j === pattern_[0]){
                let tep = pattern_.split('');
                tep.shift();
                pattern_ = tep.join('');
            }else{
                // 当前字母大写
                if(j >= 'A' && j <= 'Z'){
                    flag = false;
                    break;
                }else{
                     // 当前字母小写
                    continue;
                }
            }
        }
        if(pattern_.length > 0) flag = false;
        res.push(flag);
    }
    
    return res;
};