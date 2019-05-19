/**
 * 1047. Remove All Adjacent Duplicates In String
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    if(S.length < 2) return S;
    let start = 0, last = 1;
    while(last <= S.length - 1){
        if(S[start] !== S[last]){
            start++;
            last++;
        }else{
            let temp = S.split('');
            temp.splice(last, 1);
            temp.splice(start, 1);
            S = temp.join('');
            start = 0;
            last = 1;
        }
    }
    
    return S;
};

let str = 'abbaca';
console.log(removeDuplicates(str));