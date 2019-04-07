/**
 * 1022. Remove Outermost Parentheses
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let primitives  = []; // stack 为空就是primitives
    let stack = [], cur = '';
    for(let i of S){
        cur += i;
        if(i === '('){
            stack.push('(');
        }else{
            stack.pop();
            if(stack.length === 0){
                primitives.push(cur);
                cur = '';
            }
        }
    }
    
    let res = '';
    
    for(let i of primitives){
        res += i.slice(1, i.length - 1);
    }
    
    return res;
};