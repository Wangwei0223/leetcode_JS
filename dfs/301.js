/**
 * @param {string} s
 * @return {string[]}
 */

var removeInvalidParentheses = function(s) {
    var res = new Set();
    let l = 0, r = 0; // 记录要删除的左括号和右括号个数
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            l++;
        }
        
        if(s[i] === ')'){
            if(l === 0){
                r++;
            } else if (l > 0){
                l--;   
            }
        }
        
    }
    
    dfs(s, 0, '', l, r, 0, res);
    return Array.from(res);
};


var dfs = function(s, index, sb, l, r, open, res){
    if (l < 0 || r < 0 || open < 0) {
        return;
    }
    if (index === s.length) {
        if (l === 0 && r === 0 && open == 0) {
            res.add(sb);
        }        
        return;
    }

    let c = s[index]; 

    if (c === '(') {
        dfs(s, index + 1, sb, l - 1, r, open, res);		    // not use (
    	dfs(s, index + 1, sb + c, l, r, open + 1, res);       // use (

    } else if (c === ')') {
        dfs(s, index + 1, sb, l, r - 1, open, res);	            // not use  )
    	dfs(s, index + 1, sb + c, l, r, open - 1, res);  	    // use )

    } else {
        dfs(s, index + 1, sb + c, l, r, open, res);	
    }
    
}