/**91. 解码方法
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(s < '1') return 0;
    res= [];
    backtracking_(s, [], 0);
    return res.length;
};

var backtracking_ = function(strs, temp_list, start){
    if(strs.length === start && temp_list.join('').length === strs.length){
        res.push(temp_list.slice());
        return;
    }

    for(let i = start; i < strs.length; i++){
        if(strs[i] > 0){
            temp_list.push(strs[i]);
            backtracking_(strs, temp_list, i + 1); //一条路, 只取一个字符
            temp_list.pop();   
        }
        if(i + 1 < strs.length && strs[i] + strs[i + 1] <= '26' && strs[i] > '0'){
            var temp = strs[i] + strs[i + 1];
            temp_list.push(temp);
            backtracking_(strs, temp_list, i + 2);
            temp_list.pop();
        }
    }
}