/**
 * 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）
 * @param {*} str 
 */
function FirstNotRepeatingChar(str) {
    // write code here
    var hash = {};
    for (let i = 0; i < str.length; i++) {
        if (!hash[str[i]]) hash[str[i]] = 1;
        else {
            hash[str[i]] += 1;
        }
    }
    for(let j = 0; j < str.length; j++){
        if(hash[str[j]] === 1) return j;
    }

    return -1;
}

console.log(FirstNotRepeatingChar(''));