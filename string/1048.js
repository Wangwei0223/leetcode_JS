/**
 * 1048. Longest String Chain
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    let lengthArr = new Array(words.length);
    lengthArr[0] = 1;
    words.sort(function(a, b){
        return a.length - b.length;
    });
    // console.log(words);
    for(let i = 1; i < words.length; i++){
        let j = i - 1;
        lengthArr[i] = 1;
        while(j >= 0 && words[j].length === words[i].length){
            j--;
        }
        while(j >= 0 && words[j].length === words[i].length - 1){
            if(isPre(words[j], words[i])){
                lengthArr[i] = Math.max(lengthArr[i], lengthArr[j] + 1);
                // console.log(words[j], '是 ', words[i], '的pre: ', '目前长', lengthArr[i]);
            }
            j--;
        }
    }
    
    lengthArr.sort(function(a, b){
        return b - a;
    });
    return lengthArr[0];
};


var isPre = function(a, b){
    let long, short;
    if(a.length > b.length){
        long = a;
        short = b;
    }else{
        long = b;
        short = a;
    }
    
    for(let i = 0; i < short.length; i++){
        if(short[i] !== long[i]){
            let temp = long.split('');
            temp.splice(i, 1);
            long = temp.join('');
            if(long === short){
                return true;
            }else{
                return false;
            }
        }
    }
    
    return true;
}